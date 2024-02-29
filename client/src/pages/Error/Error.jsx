import "./Error.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta/Meta";

const Error = () => {
    useEffect(() => {
        document.title = '404 | Not Found';
    }, [])

    return (
        <div className="error_container">
            <Meta name="404 | Not Found" />
            <img className="error_img" src="images/404.png" alt="error"/>
            <p className="error_line">Oops! Page Not Found.</p>
            <Link to={"/"} className="bg-sky-500 hover:bg-sky-600 py-2.5 px-6 rounded-xl text-gray-900 font-medium mt-5">Go Back to Home</Link>
        </div>
    )
}

export default Error;