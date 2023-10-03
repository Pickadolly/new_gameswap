
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AuctionList() {
  const [auctions, setAuctions] = useState([]);
  const apiUrl = 'mongodb+srv://testuser:hejabc123@cluster0.g3xqtcs.mongodb.net/?retryWrites=true&w=majority'; // Replace with your Spring API URL

  useEffect(() => {
    async function fetchAuctions() {
      try {
        const response = await axios.get(`${apiUrl}/auction/getall`);
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    }

    fetchAuctions();
  }, [apiUrl]);

  return (
    <div>
      <h2>All Auctions</h2>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.id}>{auction.name}</li>
          // Customize the rendering of auction data as needed
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
