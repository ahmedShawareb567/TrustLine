import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

export const AppImage = ({ src, alt, width, height, ...rest }: any) => {
  return (
    <>
      <div className="appImage" {...rest}>
        <LazyLoadImage
          alt={alt}
          height={height}
          src={src}
          width={width}
          effect="blur"
        />
      </div>
    </>
  );
};
