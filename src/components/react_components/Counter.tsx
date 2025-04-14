import { useState, useEffect, useRef } from "react";

interface CounterProps {
    value: number;
    duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const frameRate = 16;
                    const totalFrames = duration / frameRate;
                    const step = value / totalFrames;

                    const interval = setInterval(() => {
                        start += step;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(interval);
                        } else {
                            setCount(Math.ceil(start));
                        }
                    }, frameRate);

                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default Counter;
