import { useState, useEffect } from "react"
import './Gallery.scss'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"


const Gallery = () => {

    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);


    const gallery = [
        {
            url: "../../../public/images/pic1.jpg"
        },
        {
            url: "../../../public/images/pic2.jpg"
        },
        {
            url: "../../../public/images/pic3.jpg"
        },
        {
            url: "../../../public/images/pic4.jpg"
        },
        {
            url: "../../../public/images/pic5.jpg"
        },
        {
            url: "../../../public/images/pic6.jpg"
        },
        {
            url: "../../../public/images/pic7.jpg"
        },
        {
            url: "../../../public/images/pic1.jpg"
        }
    ]

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modal]);


    return (
        <div className="gallery_container">
            <Heading heading="PHOTOS" desc="— Our Photo Gallery" />
            <div className="photo-gallery-cont">
                <div className="photo-gallery">

                    <div className="image-container">
                        {
                            gallery.map((img, index) => {
                                return (
                                        <img data-aos="fade-up" key={index} src={img.url} alt="gallery-photo" onClick={() => {
                                            setCurrentImg(index);
                                            setModal(true);
                                        }} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>

            {
                modal && <div className="slideshow-container transition">
                    <div className="slide">
                        <div className="img-display">
                            <img src={gallery[currentImg].url} alt="dhgjjhgd" />
                        </div>

                        <div className="controls">
                            <button onClick={() => {
                                if (currentImg === 0) {
                                    setCurrentImg(gallery.length - 1);
                                } else {
                                    setCurrentImg(currentImg - 1);
                                }
                            }}>
                                <MdKeyboardArrowLeft size={20} />
                            </button>
                            <button onClick={() => setModal(false)}>
                                <MdClose size={20} />
                            </button>
                            <button onClick={() => {
                                if (currentImg === gallery.length - 1) {
                                    setCurrentImg(0);
                                } else {
                                    setCurrentImg(currentImg + 1);
                                }
                            }}>
                                <MdKeyboardArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Gallery