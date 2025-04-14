import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface BlogPostProps {
    title: string;
    content: string;
    img: string | any;
    number: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, img, number }) => {
    const isEven = number % 2 === 0;

    const imageSrc = typeof img === 'string' ? img : img.src;

    return (
        <section className="mb-16 blog_section">
            <article className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`blog_content flex-1 sm:order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-2xl font-bold mb-6">{title}</h2>
                    <div className=" prose-lg max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:underline">
                        <ReactMarkdown
                            children={content}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                a: ({ node, ...props }) => (
                                    <a
                                        {...props}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    />
                                ),
                            }}
                        />
                    </div>

                </div>
                <div className={`flex-1 order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={imageSrc} alt="Blog Post Image" className="w-full h-auto align-self-center object-contain max-h-[80vh]" />
                </div>
            </article>
        </section>
    );
};

export default BlogPost;