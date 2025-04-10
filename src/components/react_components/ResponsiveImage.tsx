import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchData } from "../../utils/utils.ts";
import { PUBLIC_API_URL_STRAPI } from "../../services/api.ts";

const ResponsiveImage = ({ src, alt, className }:{src:string,alt:string,className:string}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkImageType = async () => {
            try {
                const response = await fetch(src, { method: 'HEAD' });
                const contentType = response.headers.get('content-type');

                // Set the appropriate source
                setImageSrc(src);
            } catch (err) {
                console.error("Error checking image type:", err);
                setImageSrc(src); // Fallback to original source
                setError(true);
            }
        };

        checkImageType();
    }, [src]);

    return (
        <div className={`relative ${className}`}>
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"></path>
                    </svg>
                </div>
            )}

            <picture>
                {!error && <source srcSet={imageSrc} type="image/webp" />}
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                        setError(true);
                        setImageLoaded(true);
                    }}
                    loading="lazy"
                />
            </picture>
        </div>
    );
};

export default ResponsiveImage;
