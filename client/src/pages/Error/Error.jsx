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
            <img className="error_img" src='./images/quicklink/error.png' alt="error"></img>
            <h1 className="error_head">404</h1>
            <p className="error_line">Oops! Page Not Found.</p>
            <Link to={"/"} className="error_btn">Go Back</Link>
        </div>
    )
}

export default Error;