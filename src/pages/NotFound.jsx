import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-button">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
