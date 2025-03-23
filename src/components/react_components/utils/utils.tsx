import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}

export default function OptimizedImage({ src, alt, className, style, ...props }: OptimizedImageProps) {
    if (!src) {
        console.error("OptimizedImage Error: src is required");
        return null;
    }

    if (src.startsWith("/public")) {
        console.warn(`Incorrect path: ${src}. Use relative paths like "/portfolio/image.png"`);
    }

    // Extract base filename without extension
    const match = src.match(/(.*)\.(webp)$/);
    const baseSrc = match ? match[1]  : src; // Remove extension if valid

    return (
        <picture>
            {/* WebP format if available */}
            {match && <source srcSet={`${baseSrc}.webp`} type="image/webp" />}

            {/* Original format as fallback */}
            <img
                src={src}
                alt={alt}
                className={className}
                loading="lazy"
                style={style}
                {...props}
                onError={(e) => console.warn(`Image not found: ${src}`, e)}
            />
        </picture>
    );
}
