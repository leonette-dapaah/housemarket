// global imports
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page Content</h2>
            <button type="button" onClick={() => navigate("/property-listing")} className="bg-primary text-white py-1.5 rounded uppercase">View More</button>
        </div>
    );
}
 
export default HomePage;