import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, img }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit?url=${img}`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 m-4">
      <img className="w-full h-64 object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white text-center">{title}</div>
        <button 
          onClick={handleEditClick} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 w-full rounded mt-4"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
