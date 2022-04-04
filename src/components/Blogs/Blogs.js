import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='all-blog'>
            <section>
                <h1>What is Semantic Tag</h1>
                <p>
                    If you know a little about HTML, you will know that HTML tags are (mostly) used to format content - these tags tell the browser how to display the content on the page. They give no indication as to what type of content they contain or what role that content plays in the page.

                    Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.

                    By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.
                </p>
            </section>
            <h1>Difference of Inline-Block And Block-Elements </h1>
            <p>Inline block vs block element is one of the most important factors when choosing which HTML element to use in your markup.
                Semantics matter as well, and this should always be considered.
                But the display behavior will have a direct impact on the visual aspect of your page.
                With a block-level element, there will always be a new line after the closing tag.example London..
                So, no matter how you organize your HTML, block-level elements always create a new line.
                With an inline element, there is never a new line.
                Therefore, no matter how you organize your inline-elements in the markup, they will always appear side-by-side. example Bangladesh....
            </p>
            <section>

            </section>
        </div>
    );
};

export default Blogs;