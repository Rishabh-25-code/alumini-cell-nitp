import { useState, useEffect, memo, useCallback } from "react"
import './Gallery.scss'
import { getDocuments, deleteDocument, createDocument } from "../../services/documents";
import { deleteFile, compressedImageUpload, getImageURL } from "../../services/files";
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"
import Meta from "../../components/Meta/Meta";
import Loader from "../../components/Loader";
import { useQuery } from "@tanstack/react-query"
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { UploadImage } from "../../components/FormComponents";

const Gallery = memo(() => {
    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["gallery"],
        queryFn: () => getDocuments("gallery"),
    });

    const handleImageChange = useCallback((newImageIndex) => {
        if (newImageIndex >= 0 && newImageIndex < data.length) {
            setCurrentImg(newImageIndex);
        }
    }, [data]);
    //This part of code handles the keyboard events.
    const handleKeyPress = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                handleImageChange(currentImg - 1);
                break;
            case "ArrowRight":
                handleImageChange(currentImg + 1);
                break;
            case "Escape":
                setModal(false);
            default:
                break;
        }
    };
    //this part of code handles Mouse click events
    const handleClose = (e) => {
        if (e.target.nodeName === "DIV" && modal === true) {
            setModal(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [currentImg, handleKeyPress]);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [modal]);

    const handleDelete = async (id) => {
        try {
            const imgId = data.find((img) => img.$id === id).imgId;
            await Promise.allSettled([deleteDocument("gallery", id), deleteFile(imgId)]);
            await refetch();
            toast.success("Image deleted successfully.");
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault();

        if (image === null) return toast.error("Please select an image.");

        try {
            setLoading(true);
            const img = await compressedImageUpload(image, 0.25);
            await createDocument("gallery", { imgId: img.$id, url: getImageURL(img.$id) });
            await refetch();
            setImage(null);
            setShowForm(false);
            toast.success("Image uploaded successfully.");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-24">
            <Meta title="Gallery | NITP Alumni" />
            <Heading heading="PHOTOS" heading1="Our Photo Gallery" />



            <div className="flex justify-center items-center my-6 relative">
                {!showForm && <button className="absolute mr-10 right-5 bg-sky-600 px-8 py-2.5 rounded-xl" onClick={() => setShowForm(!showForm)}>
                    + Upload Image
                </button>}
                {showForm && <form onSubmit={handleUpload} className="flex flex-col items-center justify-center gap-10">
                    <UploadImage imgH="h-36" image={image} setImage={setImage} placeholder={"Upload Image"} label={"Upload Image"} maxSizeMB={5} />
                    <div className="flex gap-5">
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage(null);
                            setShowForm(false);
                        }} disabled={loading} className="bg-blue-500 disabled:bg-blue-600 py-2.5 px-10 rounded-2xl" type="submit">
                            Cancel
                        </button>
                        <button disabled={loading} className="bg-rose-500 disabled:bg-rose-700 py-2.5 px-10 rounded-2xl" type="submit">
                            Upload
                        </button>
                    </div>
                </form>}
            </div>


            <div className="photo-gallery-cont">
                <div className="photo-gallery gap-5">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-[10rem] w-full">
                            <Loader />
                        </div>
                    ) : isError ? (
                        <p>Something went wrong.</p>
                    ) : (
                        <div className="grid w-full text-center lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-6">
                            {data.slice().reverse().map((img, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-900 bg-opacity-40 rounded-[1rem] relative cursor-pointer"
                                    >
                                        <button onClick={() => handleDelete(img.$id)} className="absolute z-20 right-3 top-3 flex items-center p-2">
                                            <FaTrash className="text-rose-500" size={23} />
                                        </button>

                                        <img
                                            data-aos="zoom-in"
                                            className="rounded-[1rem]"
                                            height={1080}
                                            width={1920}
                                            loading="lazy"
                                            src={img.url}
                                            alt="gallery-photo"
                                            onClick={() => {
                                                setCurrentImg(index);
                                                setModal(true);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {modal && (
                <div
                    className="slideshow-container transition"
                    onClick={(e) => {
                        handleClose(e);
                    }}
                >
                    <div className="slide">
                        <div className="img-display">
                            <img
                                src={data[currentImg].url}
                                alt="gallery-photo"
                            />
                        </div>

                        <div className="controls">
                            <button
                                onClick={() => {
                                    if (currentImg === 0) {
                                        setCurrentImg(data.length - 1);
                                    } else {
                                        setCurrentImg(currentImg - 1);
                                    }
                                }}
                            >
                                <MdKeyboardArrowLeft className="text-white" size={20} />
                            </button>
                            <button onClick={() => setModal(false)}>
                                <MdClose className="text-white" size={20} />
                            </button>
                            <button
                                onClick={() => {
                                    if (currentImg === data.length - 1) {
                                        setCurrentImg(0);
                                    } else {
                                        setCurrentImg(currentImg + 1);
                                    }
                                }}
                            >
                                <MdKeyboardArrowRight className="text-white" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
})

export default Gallery;