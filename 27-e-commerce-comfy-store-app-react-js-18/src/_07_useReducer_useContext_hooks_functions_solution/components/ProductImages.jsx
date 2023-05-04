import { useState } from "react";
import { ProductImagesWrapper } from "./styleWrappers";

export default function ProductImages(props) {
  const images = props.images || [{ url: "" }];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <ProductImagesWrapper>
      <img src={mainImage.url} alt="front main" className="main" />
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.filename}
            onClick={() => setMainImage(images[index])}
            className={image.url === mainImage.url ? "active" : ""}
          />
        ))}
      </div>
    </ProductImagesWrapper>
  );
}
