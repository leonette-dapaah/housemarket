import React from 'react';
import './HouseCard.css';

interface HouseCardProps {
  imageSrc: string;
  streetName: string;
  price: string;
  bed: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ imageSrc, streetName, price, bed }) => (
  <div className="house-card">
    <img src={imageSrc} alt="House" className="house-image" />
    <p className="street-name">{streetName}</p>
    <p className="price">{price}</p>
    <p className="bed">{bed}</p>
  </div>
);

export default HouseCard;
