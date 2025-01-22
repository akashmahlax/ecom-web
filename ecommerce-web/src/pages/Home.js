import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import ProductCollection from '../components/ProductCollection';


const collections = [
  { id: 1, name: 'Men', image: 'https://via.placeholder.com/300x200?text=Men+Collection' },
  { id: 2, name: 'Women', image: 'https://via.placeholder.com/300x200?text=Women+Collection' },
  { id: 3, name: 'Kids', image: 'https://via.placeholder.com/300x200?text=Kids+Collection' },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleCollectionClick = (collectionName) => {
    // Navigate to the collection page
    navigate(`/${collectionName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Hero/>
        <Products/>
        <ProductCollection/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-black text-slate-600 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleCollectionClick(collection.name)}
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-center">{collection.name} Collection</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;