import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'react-carousel-minimal';

function Card(props) {
    const data = [
        {
            image: "https://picsum.photos/id/15/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/16/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/17/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/18/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/19/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/20/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/21/1920/1080",
            caption: "Event"
        },
        {
            image: "https://picsum.photos/id/22/1920/1080",
            caption: "Event"
        },

    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <dl>
                    <dt>{props.head}</dt>
                    <dd>{props.writer}</dd>
                </dl>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        // slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;

