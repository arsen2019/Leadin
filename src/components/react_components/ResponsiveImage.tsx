import React from 'react';
interface ImageProps {
    src:string,
    alt:string,
    sizes?:string,
    className?:string,
    loading:"lazy" | "eager",
    fetchPriority:"auto" | "high" | "low",
}

const ResponsiveImage = ({
                             src='',
                             alt='',
                             sizes,
                             className = '',
                             loading = 'lazy',
                             fetchPriority = 'auto'
                         }:ImageProps) => {
    // Assuming your CMS provides multiple formats
    // const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
    // const avifSrc = src.replace(/\.(jpg|jpeg|png)$/, '.avif');

    // Assuming your CMS provides different sizes
    // e.g., image.jpg?width=480, image.jpg?width=768, etc.
    const srcSet = `
    ${src}?width=480 480w,
    ${src}?width=768 768w,
    ${src}?width=1024 1024w,
    ${src}?width=1440 1440w
  `;

    return (
        <picture>
      {/*      <source type="image/avif" srcSet={`*/}
      {/*  ${avifSrc}?width=480 480w,*/}
      {/*  ${avifSrc}?width=768 768w,*/}
      {/*  ${avifSrc}?width=1024 1024w,*/}
      {/*  ${avifSrc}?width=1440 1440w*/}
      {/*`} sizes={sizes} />*/}
      {/*      <source type="image/webp" srcSet={`*/}
      {/*  ${webpSrc}?width=480 480w,*/}
      {/*  ${webpSrc}?width=768 768w,*/}
      {/*  ${webpSrc}?width=1024 1024w,*/}
      {/*  ${webpSrc}?width=1440 1440w*/}
      {/*`} sizes={sizes} />*/}
            <img
                src={src}
                sizes={sizes}
                alt={alt}
                className={className}
                loading={loading}
                fetchPriority={fetchPriority}
            />
        </picture>
    );
};

export default ResponsiveImage;