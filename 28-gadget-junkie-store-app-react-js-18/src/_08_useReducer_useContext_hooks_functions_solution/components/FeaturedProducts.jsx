import { useProductsContext } from "../context/";
import { Link /* , useFetcher  */ } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { FeaturedProductsWrapper } from "./styleWrappers";

export default function FeaturedProducts() {
  const { isProductsLoading, isProductsError, featuredProducts } =
    useProductsContext();

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
        {featuredProducts /* .slice(0, 3) */
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
      <Link to={"/products"} className="btn ">
        {" "}
        all products
      </Link>
    </FeaturedProductsWrapper>
  );
}

//-------------------------------------------------------------------

// import { useProductsContext } from "../context/";
// import { Link, useFetcher } from "react-router-dom";
// import Error from "./Error";
// import Loading from "./Loading";
// import Product from "./Product";
// import { FeaturedProductsWrapper } from "./styleWrappers";
// import {
//   featuredProductsRandomizer,
//   randomArrayIndexer,
// } from "../../utilities";
// import { useEffect, useState } from "react";

// export default function FeaturedProducts() {
//   const { isProductsLoading, isProductsError, featuredProducts } =
//     useProductsContext();

//   const initialFeaturedProducts = featuredProducts.slice(0, 3);
//   const [featuredProductsRandomized, setFeaturedProductsRandomized] = useState(
//     initialFeaturedProducts,
//   );

//   // const [featuredProductsRandomized, setFeaturedProductsRandomized] = useState(
//   //   () => featuredProducts.slice(0, 3),
//   // );

//   const maxFeaturedProducts = 3;

//   //--------------------------------
//   // useEffect(() => {
//   //   let featuredProductsRandomized = featuredProductsRandomizer(
//   //     featuredProducts,
//   //     featuredProductsMaxLength,
//   //   );
//   //   const timer = setInterval(() => {
//   //     const arrayOfRandomIndexes = randomArrayIndexer(
//   //       featuredProductsMaxLength,
//   //       featuredProducts.length,
//   //     );
//   //     // featuredProductsRandomizer(featuredProducts, featuredProductsMaxLength);
//   //     featuredProductsRandomized = featuredProductsRandomized.filter(
//   //       (item, index) => {
//   //         return arrayOfRandomIndexes.forEach((element, elementIndex) => {
//   //           return index === elementIndex;
//   //         });
//   //       },
//   //     );
//   //   }, [5000]);

//   //   return () => {
//   //     clearInterval(timer);
//   //   };
//   // }, [featuredProducts]);

//   //--------------------------------

//   // useEffect(() => {
//   //   setFeaturedProductsRandomized(() => featuredProducts.slice(0, 3));
//   // }, []);
//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     setFeaturedProductsRandomized(() =>
//   //       featuredProductsRandomizer(featuredProducts, maxFeaturedProducts),
//   //     );
//   //   }, [5000]);

//   //   return () => {
//   //     clearInterval(timer);
//   //   };
//   // }, [featuredProducts]);

//   if (isProductsLoading) {
//     return (
//       <div className="section section-center">
//         <Loading />
//       </div>
//     );
//   }

//   if (isProductsError) {
//     return <Error />;
//   }

//   return (
//     <FeaturedProductsWrapper className="section">
//       <div className="title">
//         <h2> featured products</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="section-center featured">
//         {(featuredProductsRandomized || initialFeaturedProducts).map(
//           (product) => (
//             <Product key={product.id} {...product} />
//           ),
//         )}
//       </div>
//     </FeaturedProductsWrapper>
//   );
// }

//----------------------------------------------------------------------------------------
