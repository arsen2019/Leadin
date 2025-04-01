import React from 'react';

interface BlogPostProps {
    title: string;
    content: string;
    img: string | any; // Supporting both string URLs and imported images
    number: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, img, number }) => {
    const isEven = number % 2 === 0;

    // Handle both imported images and string URLs
    const imageSrc = typeof img === 'string' ? img : img.src;

    return (
        <section className="mb-16 blog_section">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`blog_content flex-1 sm:order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-2xl font-bold mb-6">{title}</h2>
                    <p className="blog_text text-lg">
                        {content}
                    </p>
                </div>
                <div className={`flex-1 order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={imageSrc} alt="Blog Post Image" className="w-full h-auto align-self-center object-contain max-h-[80vh]" />
                </div>
            </article>
        </section>
    );
};

export default BlogPost;