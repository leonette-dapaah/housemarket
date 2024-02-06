import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader, PropagateLoader, PuffLoader } from "react-spinners";

const WelcomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/homepage');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f9f9f9]">
      {loading ? (
        <div className="mt-[200px]">
          <p className="text-[#070058] text-[100px] font-semibold mb-[100px] font-faustina">HOUSEMARKET</p>
          <div className="flex justify-center items-center mt-[100px]">
            <BarLoader color="#070058" size={10}/>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WelcomePage;
