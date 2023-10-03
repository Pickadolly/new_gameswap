import React, { useState } from 'react';
import './CreateAuction.css';
import Navbar from './navbar';



function CreateAuction() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // title starting price
    setName('');
    setPrice('');
    setDescription('');
    setPictures([]);
  };

  const handlePictureUpload = (e) => {
    const uploadedPictures = Array.from(e.target.files);
    setPictures(uploadedPictures);
  };

  return (
    
    <div className="center-container">
     <div className="center-content">
     <Navbar />

    <h1 className="create-auction-title">Create Auction</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="description">Description: </label>
  <textarea
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    className="textarea-spacing" 
  ></textarea>
</div>

        <div className="form-group">
          <label htmlFor="pictures">Upload Pictures: </label>
          <input
            type="file"
            id="pictures"
            multiple
            accept="image/*"
            onChange={handlePictureUpload}
          />
        </div>
        <div>
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={URL.createObjectURL(picture)}
              alt={`Uploaded ${index + 1}`}
              width="100"
            />
          ))}
        </div>
        <button type="submit">Create Auction</button>
      </form>
    </div>
    </div>
  );
}

export default CreateAuction;
