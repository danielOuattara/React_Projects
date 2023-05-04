import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../context";
import { single_product_url, priceFormatter } from "./../../utilities";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { SingleProductPageWrapper } from "./styleWrappers";

export default function SingleProductPage() {
  const {
    fetchSingleProduct,
    isSingleProductLoading,
    isSingleProductError,
    singleProduct,
  } = useProductsContext();

  const params = useParams();
  const navigate = useNavigate();
  //------------------------------
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${params.productId}`);
  }, []);

  //------------------------------
  useEffect(() => {
    if (isSingleProductError) {
      setTimeout(() => {
        return navigate("/");
      }, 3000);
    }
  }, [isSingleProductError, navigate]);

  if (isSingleProductLoading) {
    return (
      <div className="section section-center">
        <Loading />
      </div>
    );
  }

  if (isSingleProductError) {
    return <Error />;
  }

  return (
    <SingleProductPageWrapper>
      <PageHero title={singleProduct.name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={singleProduct.images} />
          <section className="content">
            <h2>{singleProduct.name}</h2>
            <Stars />
            <h5 className="price">{priceFormatter(singleProduct.price)}</h5>
            <p className="desc">{singleProduct.description}</p>

            <p className="info">
              <span>Available : </span>
              {singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>

            <p className="info">
              <span>SKU : </span> {singleProduct.id}
            </p>

            <p className="info">
              <span>Brand : </span> {singleProduct.company}
            </p>
            {singleProduct.stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </SingleProductPageWrapper>
  );
}
