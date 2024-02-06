import React, { useEffect, useState } from "react";
import houseImg from "@/assets/images/homepage.jpg";
import Dropdown from "@/components/dropdown";
import HouseCard from "@/components/housecards";
import houseImage from "@/assets/images/section1.jpg";
import houseImgg from "@/assets/images/section2.jpg";
import { useNavigate } from "react-router-dom";
import {  houseData } from "@/data/housedata";
import { Link } from "react-router-dom";
import { PropertyDetails } from "@/features/propertyDetails";
import { usePropertyStore } from "@/store/store";
import moment from "moment";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePostFavourite } from "@/store/favourites";
import { PuffLoader } from "react-spinners";



const Home: React.FC = () => {
  const [loader , setLoader] = useState(false);
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      
    }, 0.1)

  }, [])

  const navigate = useNavigate();
  const { properties, fetchAndSetProperties } = usePropertyStore();
  const { addFavourite } = usePostFavourite();
  useEffect(() => {
    fetchAndSetProperties();
  }, []);

  // const { favouriteItems, addToFavorites } = useFavouritesStore();

  // const handleAddToFavourites = (itemId: string) => {
  //   addToFavourites(itemId);
  // };
  
   const [likedItems, setLikedItems] = useState<string[]>([]);
  
  const userId = localStorage.getItem('user_id')
  const handleLikeClick = async (itemId: string) => {
    const response = await addFavourite(itemId, userId);
    console.log(response);
    // Toggle liked status for the item with itemId
    setLikedItems((prevLikedItems:any) =>
      prevLikedItems.includes(itemId)
        ? prevLikedItems.filter((id:any) => id !== itemId)
        : [...prevLikedItems, itemId]
    );
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     easing: 'ease-in-out',
  //     offset: 200,
  //     once: true, // Animation only occurs once
  //   });
  // }, []);
  
  return (
    <div className="w-full h-full grid gap-24">
      <div style={{backgroundImage: `url(${houseImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} 
        className="p-5 lg:h-[700px] sm:p-10 md:p-20 h-[42rem] relative flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col text-center relative p-10 gap-3">
          <p className="font-[500] mt-[-130px] text-5xl w-full mb-2 text-white font-faustina lg:text-7xl md:text-6xl">Your Property Marketplace</p>
          <p className=" text-xl lg:text-[25px] text-white font-faustina md:text-[20px]">Simplifying the Process of Renting, Buying, and Selling Properties</p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Dropdown />
      </div>
      <div className="mt-[150px] lg:mt-[-200px] md:mt-[-70px]">
        <div className="grid gap-1">
          <p style={{ fontSize: 50, textAlign: "center", color: "#070058", marginBottom: 0 }} className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 font-faustina">Latest Listing</p>
          <p style={{ fontSize: 20, textAlign: "center", color: "#070058", paddingBottom: 100 }} className="font-faustina">Checkout our latest property listing</p>
        </div>
        {properties && properties.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 lg:mt-[-50px] mt-[-40px]" onClick={PropertyDetails}>
            {properties.map((house, index: number) => {
              return (
                <Link to={`/features/propertyDetails/${house.id}`}>
                  <HouseCard
                    key={index}
                    imageSrc={house?.images[0].file_content}
                    streetName={house.gps_address + ", "+ house.location}
                    price={house.price}
                    bed={house?.bed}
                    created_at={moment(house.created_at).fromNow()}
                    isLiked={likedItems.includes(house.id)}
                   onClick={() => handleLikeClick(house.id)}
                  />
                </Link>
              )
            })}
          </div>
        ) : ( 
          <div className="flex justify-center items-center mb-[60px]">
            <p>Sorry! There are no properties listed.</p>
          </div>
        )}       
        <Link to="/features/buy">
            <button className="mx-auto flex items-center justify-center mt-[-40px] bg-[#060F42] text-white text-[16px] p-5 rounded-lg">VIEW MORE</button>
        </Link>
      </div>
      <div className="relative flex flex-col lg:ml-[700px] lg:mt-[100px]">
        <img src={houseImage} alt="house" className="w-full lg:w-1/2 h-[500px] lg:ml-[-300px]" />
        <div className="lg:mr-[260px] w-full lg:w-1/2 h-[500px] bg-white text-[#060F42] p-16 lg:mt-[-650px] lg:ml-[100px]">
          <p className="pt-20 text-5xl text-center  mb-10 font-faustina">Rent or buy a<br />Property</p>
          <p className="text-center">Discover your perfect property solution, where you can effortlessly rent or buy properties that suit your needs. Simplifying the process, we provide a seamless platform to find your dream home or lucrative investment opportunity.</p>
          <Link to="/features/buy">
            <button className="mx-auto flex items-center justify-center mt-10 bg-[#060F42] text-white text-[16px] p-3 rounded-lg">RENT/BUY</button>
          </Link>
        </div>
      </div>
      <div className="relative flex flex-col lg:mt-[300px] lg:mb-64 mb-24">
        <img src={houseImgg} alt="house" className="w-full lg:w-2/6 h-[700px] lg:h-[500px] lg:ml-[900px]" />
        <div className="w-full lg:w-2/6 h-[500px]  bg-white text-[#060F42] p-16 mt-[-270px] lg:ml-[500px] ">
          <p className="pt-20 text-5xl text-center mb-10 font-faustina">Rent or buy a<br />Property</p>
          <p className="text-center">Maximize your property"s potential on our platform, where you can effortlessly list and rent or sell your property. With user-friendly tools and a wide-reaching audience, we make it easy for you to showcase and monetize your real estate investment.</p>
          <Link to="/features/faqs"> 
            <button className="mx-auto flex items-center justify-center mt-10 bg-[#060F42] text-white text-[16px] p-3 rounded-lg">Get Started</button>
          </Link>
        </div>
      </div> 
    </div>
  );
}

export default Home;
