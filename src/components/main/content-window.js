import React, {Component} from 'react';
import AppIPA from '../ipa/app-ipa';
import AppCats from "../cats/app-cats";


export default class ContentWindow extends Component {

    // constructor(props) {
    //     super(props);
    //
    //
    // }


    renderContent = () => {

        const {contentLoad, content} = this.props;
        let contentId = contentLoad - 1;
        let contentNews = null;

        switch (contentId) {
            case 0:
                contentNews = <AppIPA/>;
                break;
            case 1:
                contentNews = <AppCats/>;
                break;
            default:
                contentNews =
                    <>
                        <h1 className="mt-4">{content[contentId].title}</h1>
                        <p className="text-justify">{content[contentId].text}</p>
                    </>;

        }



        // if (contentId === 0) {
        //     contentNews = <AppIPA/>
        // } else {
        //     contentNews = <>
        //             <h1 className="mt-4">{content[contentId].title}</h1>
        //             <p className="text-justify">{content[contentId].text}</p>
        //         </>
        // }
        return contentNews;
    };


    render() {

        return (
            <div className="container-fluid">
                {this.renderContent()}
            </div>
        )
    }
};

