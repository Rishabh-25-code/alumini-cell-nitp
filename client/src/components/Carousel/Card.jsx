import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'react-carousel-minimal';

function Card(props) {
    const data = [
        {
            image: "/images/Meet5300/DSC_0093-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0100-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0139-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0154-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0158-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0191-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0197-min.jpg",
            caption: "Alumni Meet 2023"
        },
        {
            image: "/images/Meet5300/DSC_0202-min.jpg",
            caption: "Alumni Meet 2023"
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

