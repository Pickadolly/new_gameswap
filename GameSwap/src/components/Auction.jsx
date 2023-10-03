import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_URL;

function Auction({ auctionInfo, user, handleRefresh }) {

  const [show, setShow] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);

  const game = auctionInfo.game;
  const auctionOwner = auctionInfo.auctionOwner;
  const currentBidder = auctionInfo.currentBidder;
  const currentBidderName = currentBidder === null ? "None" : currentBidder.userName;

  const containerStyle = {
    background: '#282a36',
    padding: '20px',
    margin: '20px',
    width: '400px',
    border: '2px solid #646cff',
    borderRadius: '20px',
  }
  
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleBid = async () => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios.put(`http://localhost:8080/api/auth/auction/bid`, {
      auctionId: auctionInfo.id, 
      bidderId: user.userId,
      bidAmount: bidAmount
    }).then(resp => {
      handleRefresh();
    })
    setBidAmount(0);
    setShow(false);

  }

  const handleBidChange = (e) => {
    let isnum = /^\d+$/.test(e.target.value);
    if (isnum) {
      setBidAmount(e.target.value);
    }
  }

  return (
    <>
      <div style={containerStyle}>
        <h1 style={{ color: '#bd93f9'}}>{game.gameTitle.toUpperCase()}</h1>
        <>By: {auctionOwner.userName}</>
        <h3 style={{ color: '#50fa7b'}}>Starting price: {auctionInfo.startingBid} SEK</h3>
        <h3 style={{ color: '#50fa7b'}}>Current bid: {auctionInfo.currentBid} SEK</h3>
        <Button style={{ color: '#8be9fd'}} onClick={handleOpen}>Let's bid 👍</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{game.gameTitle.toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroupItem>Starting price: {auctionInfo.startingBid} SEK</ListGroupItem>
              <ListGroupItem>Current bid: {auctionInfo.currentBid} SEK</ListGroupItem>
              <ListGroupItem>Buy out price: {auctionInfo.buyOut} SEK</ListGroupItem>
            </ListGroup>
            <Form style={{marginTop: 5}}>
              <Form.Group className="mb-3" controlId="controlTextArea">
                <Form.Label>Type your bid: </Form.Label>
                <Form.Control size="large" as="input" rows={3} value={bidAmount} onChange={handleBidChange}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} style={{ marginRight: 10}}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBid} style={{ backgroundColor: '#50fa7b', color: 'black'}}>
              Bid 🚀
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

Auction.propTypes = {
    auctionInfo: PropTypes.object,
    user: PropTypes.object,
    handleRefresh: PropTypes.func
}

export default Auction;