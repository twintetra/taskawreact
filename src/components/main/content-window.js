import React, {Component} from 'react';
import AppIPA from '../ipa/app-ipa';
import AppDogs from "../dogs/app-dogs";

export default class ContentWindow extends Component {

    renderContent = () => {

        const {contentLoad, content} = this.props;
        let contentId = contentLoad - 1;
        let contentNews = null;

        switch (contentId) {
            case 0:
                contentNews = <AppIPA/>;
                break;
            case 1:
                contentNews = <AppDogs/>;
                break;
            default:
                contentNews =
                    <>
                        <h1 className="mt-4">{content[contentId].title}</h1>
                        <p className="text-justify">{content[contentId].text}</p>
                    </>;
        }

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

