import { useState, useEffect } from "react";
import "./Gallery.scss";
import {
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Heading from "../../components/Headings/Heading";
import { db } from "../../firebase";
import { collection, getDocs,addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import shortid from "shortid";
import { toast } from "react-toastify";

const Gallery = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [modal, setModal] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const galleryRef = collection(db, "gallery");

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const storage = getStorage();
      const filename = `${shortid.generate()}-${image.name}`;
      const storageRef = ref(storage, `gallery/${filename}`);
      await uploadBytesResumable(storageRef, image);
      const downloadUrl = await getDownloadURL(storageRef);

      const data = {
        img: downloadUrl,
      };

      const docRef = await addDoc(galleryRef, data);
      toast.success("Image uploaded successfully");
      setImage(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getGallery = async () => {
    const gallerySnap = await getDocs(galleryRef);
    const data = gallerySnap.docs.map((doc) => doc.data());
    setGallery(data);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  useEffect(() => {
    getGallery();
  }, [gallery]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <div className="gallery_container">
      <Heading heading="PHOTOS" desc="— Our Photo Gallery" />
      <form onSubmit={handleUpload} className="m-auto flex flex-col items-center gap-10">
        <label htmlFor="image" className="h-10 w-10">
          Image
        </label>
        <div className="w-[15rem] min-h-[10rem]  border-dashed border-2 border-blue-300">
          {image && (
            <img
              className="w-[15rem]"
              src={URL.createObjectURL(image)}
              alt="image"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
          onChange={handleImage}
          className="px-10 py-2 bg-blue-400 rounded-lg"
        />
        <div>
          <button type="submit" className="px-10 py-2 bg-blue-400 rounded-lg">
            Upload
          </button>
        </div>
      </form>
      <div className="photo-gallery-cont">
        <div className="photo-gallery">
          <div className="image-container">
            {gallery.map((img, index) => {
              return (
                <img
                  data-aos="fade-up"
                  key={index}
                  src={img.img}
                  alt="gallery-photo"
                  onClick={() => {
                    setCurrentImg(index);
                    setModal(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {modal && (
        <div className="slideshow-container transition">
          <div className="slide">
            <div className="img-display">
              <img src={gallery[currentImg].img} alt="dhgjjhgd" />
            </div>

            <div className="controls">
              <button
                onClick={() => {
                  if (currentImg === 0) {
                    setCurrentImg(gallery.length - 1);
                  } else {
                    setCurrentImg(currentImg - 1);
                  }
                }}
              >
                <MdKeyboardArrowLeft size={20} />
              </button>
              <button onClick={() => setModal(false)}>
                <MdClose size={20} />
              </button>
              <button
                onClick={() => {
                  if (currentImg === gallery.length - 1) {
                    setCurrentImg(0);
                  } else {
                    setCurrentImg(currentImg + 1);
                  }
                }}
              >
                <MdKeyboardArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
