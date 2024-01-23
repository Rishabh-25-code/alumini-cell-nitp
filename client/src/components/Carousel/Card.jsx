import { Carousel } from 'react-carousel-minimal';

function Card(props) {
    const data = [
        {
            image: "/images/events/computational intelligence.jpg",
            caption: ""
        },
        {
            image: "/images/Meet5300/DSC_0139-min.jpg",
            caption: ""
        },
        {
            image: "/images/events/DSC_0082-min.jpg",
            caption: ""
        },
        {
            image: "/images/events/DSC_0602-min.jpg",
            caption: ""
        },
        {
            image: "/images/events/vimantriki-min.jpg",
            caption: ""
        },
        {
            image: "/images/icefeet/icefeet12.jpeg",
            caption: ""
        },
        {
            image: "/images/icefeet/icefeet1.jpeg",
            caption: ""
        },
        {
            image: "/images/icefeet/icefeet4.jpeg",
            caption: ""
        },
        {
            image: "/images/events/eccentrica-min.jpg",
            caption: ""
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

