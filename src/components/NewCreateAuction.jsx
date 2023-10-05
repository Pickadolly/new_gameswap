import React from "react";
import NavBarElement from "./navbar";

function AuctionBuilder() {
  const [auctionName, modifyAuctionName] = React.useState("");
  const [auctionPrice, modifyAuctionPrice] = React.useState("");

  const processFormSubmission = (event) => {
    event.preventDefault();
    modifyAuctionName("");
    modifyAuctionPrice("");
  };

  const formContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const contentStyles = {
    textAlign: "center",
    marginTop: "-200px",
  };

  const inputContainerStyles = { marginBottom: "20px" };

  return (
    <div style={formContainerStyles}>
      <div style={contentStyles}>
        <NavBarElement />
        <h1 style={{ marginTop: "50px" }}>Create New Auction</h1>
        <form onSubmit={processFormSubmission}>
          <div style={inputContainerStyles}>
            <label htmlFor="auctionTitle">Title: </label>
            <input
              type="text"
              id="auctionTitle"
              value={auctionName}
              onChange={(e) => modifyAuctionName(e.target.value)}
              required
            />
          </div>
          <div style={inputContainerStyles}>
            <label htmlFor="auctionStartPrice">Starting Bid: </label>
            <input
              type="number"
              id="auctionStartPrice"
              value={auctionPrice}
              onChange={(e) => modifyAuctionPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit">Initiate Auction</button>
        </form>
      </div>
    </div>
  );
}

export default AuctionBuilder;
