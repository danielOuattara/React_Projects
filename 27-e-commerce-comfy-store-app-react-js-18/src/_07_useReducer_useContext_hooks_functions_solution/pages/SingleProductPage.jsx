import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context";
import { single_product_url } from "./../../utilities";
import { priceFormatter } from "./../../utilities";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";
import { SingleProductPageWrapper } from "./styleWrappers";

export default function SingleProductPage() {
  const {
    fetchSingleProduct,
    isSingleProductLoading,
    isSingleProductError,
    singleProduct,
  } = useProductsContext();

  const params = useParams();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${params.productId}`);
  }, []);

  console.log("singleProduct = ", singleProduct);

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
    <SingleProductPageWrapper>single product page</SingleProductPageWrapper>
  );
}
