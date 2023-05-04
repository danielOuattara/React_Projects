import { useProductsContext } from "../context/";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { FeaturedProductsWrapper } from "./styleWrappers";
import { featuredProductsRandomizer } from "../../utilities";
import { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const { isProductsLoading, isProductsError, featuredProducts } =
    useProductsContext();

  // const [featuredProductsRandomized, setFeaturedProductsRandomized] = useState(
  //   featuredProducts.slice(0, 3),
  // );

  const featuredProductsMaxLength = 3;

  const featuredProductsRandomized = featuredProductsRandomizer(
    featuredProducts,
    featuredProductsMaxLength,
  );

  //--------------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      featuredProductsRandomizer(featuredProducts, featuredProductsMaxLength);
    }, [5000]);

    return () => {
      clearInterval(timer);
    };
  }, [featuredProducts]);

  //--------------------------------
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setFeaturedProductsRandomized(
  //       featuredProductsRandomizer(featuredProducts, featuredProductsMaxLength),
  //     );
  //   }, [5000]);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [featuredProducts]);

  if (isProductsLoading) {
    return (
      <div className="section section-center">
        <Loading />
      </div>
    );
  }

  if (isProductsError) {
    return <Error />;
  }

  return (
    <FeaturedProductsWrapper className="section">
      <div className="title">
        <h2> featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProductsRandomized.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </FeaturedProductsWrapper>
  );
}
