import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return(
        <>
            <p>
                404 Page not found! Sorry
            </p>
            <Link to="/"
                className="btn rounded text-center px-8 py-3 w-40"
            >Go To Home</Link>
        </>
    );
}

export default NotFoundPage;