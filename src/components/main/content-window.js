import React from 'react';



const ContentWindow = ({content, contentLoad}) => {

    let contentId = contentLoad - 1;

    return (
        <div className="container-fluid">
            <h1 className="mt-4">{content[contentId].title}</h1>
            <p className="text-justify">{content[contentId].text}</p>
        </div>
    )
};

export default ContentWindow;