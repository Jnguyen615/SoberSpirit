import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h1 className="error-message">Something Went Wrong</h1>
      <Link to="/main">
        <button className="return-home-btn">Return to Home</button>
      </Link>
    </section>
  );
};

export default ErrorPage;
