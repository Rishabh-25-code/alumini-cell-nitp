import { useState, useEffect } from "react"
import './Gallery.scss'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"



const Gallery = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);
    const [gallery, setGallery] = useState([]);


    const getGallery = async () => {
        const galleryRef = collection(db, "gallery");
        const gallerySnap = await getDocs(galleryRef);
        const data = gallerySnap.docs.map((doc) => doc.data());
        setGallery(data);
    }

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modal]);

    useEffect(() => {
        getGallery();
    }, [gallery]);


    return (
        <div className="gallery_container">
            <Heading heading="PHOTOS" desc="— Our Photo Gallery" />
            <div className="photo-gallery-cont">
                <div className="photo-gallery">

                    <div className="image-container">
                        {
                            gallery.map((img, index) => {
                                return (
                                        <img data-aos="fade-up" key={index} src={img.img} alt="gallery-photo" onClick={() => {
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
                            <img src={gallery[currentImg].img} alt="dhgjjhgd" />
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