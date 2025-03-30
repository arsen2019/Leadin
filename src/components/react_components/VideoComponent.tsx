import React, { useState, useEffect, useRef } from 'react';

interface VideoComponentProps {
    videoBasePath: string;
    fallbackVideoBasePath?: string;
    alt?: string;
    className?: string;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
                                                           videoBasePath,
                                                           fallbackVideoBasePath,
                                                           alt = 'Video',
                                                           className = '',
                                                           loop = true,
                                                           muted = true,
                                                           controls = false,
                                                           autoPlay = true
                                                       }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [loadData, setLoadData] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Determine video source based on screen size
    const getVideoSource = () => {
        const isSmallScreen = isMobile;

        if (isSmallScreen && fallbackVideoBasePath) {
            return `${fallbackVideoBasePath}`;
        }

        return `${videoBasePath}`;
    };

    // Handle screen size changes
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Intersection Observer for playing video when in view
    useEffect(() => {
        if (!containerRef.current || !videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Attempt to play with muted autoplay
                        if (autoPlay) {
                            videoRef.current?.play().catch((error) => {
                                console.warn('Autoplay was prevented:', error);
                            });
                        }
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [autoPlay]);

    // Handle video load
    const onLoadedData = () => {
        setLoadData(true);
    };

    return (
        <div
            ref={containerRef}
            className={`video-container ${className}`}
        >
            <video
                ref={videoRef}
                src={getVideoSource()}
                muted={muted}
                loop={loop}
                playsInline
                controls={controls}
                className="object-contain max-h-[500px]"
                onLoadedData={onLoadedData}
            />
        </div>
    );
};

export default VideoComponent;