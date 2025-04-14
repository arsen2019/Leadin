import React, { useState, useEffect } from 'react';

const AnimatedText = ({ words = ["Professional", "Awesome", "Memorable", "Cool", "Powerful"] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState('scale-in');

    useEffect(() => {
        const animationCycle = async () => {
            setAnimation('scale-in');

            await new Promise(resolve => setTimeout(resolve, 2000));

            setAnimation('scale-out');
            await new Promise(resolve => setTimeout(resolve, 1000));

            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);


        };

        animationCycle();

        const intervalId = setInterval(animationCycle, 3000);

        return () => clearInterval(intervalId);
    }, [words.length]);

    return (
        <span className="text-[#B19482] inline-block font-semibold min-w-[10ch]">
      <span
          className={`inline-block transition-all duration-1000 
          ${animation === 'scale-in' ? 'scale-100 opacity-100' :
              animation === 'scale-out' ? 'scale-50 opacity-0' : 'scale-0 opacity-0'}`}
      >
        {words[currentIndex]}
      </span>
    </span>
    );
};

export default AnimatedText;