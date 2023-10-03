import { useEffect, useState } from 'react'
import axios from 'axios';
import Auction from './../components/Auction';
import { Button, Form, Modal } from 'react-bootstrap'

const baseUrl = import.meta.env.VITE_API_URL;
const userList = {
  "samee": "6411b548f0eb9069a37997d1",
  "alex": "64205c7868d81a7449c072e3",
}

function AuctionHousePage() {
  const [data, setData] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getAuctions = async () => {
    await axios.get(`${baseUrl}/auction/getall`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        return undefined;
      })
  }

  useEffect(() => {
    getAuctions();
  }, []);


  const handleRefresh = () => {
    getAuctions();
  }

  const handleSignIn = () => {
    if (userList[username] !== undefined) {
      setUser({ username: username, userId: userList[username] });
      setSignedIn(true);
    } else {
      alert("User not found");
    }
    setUsername("");
    setPassword("");
    setShowSignIn(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSignOut = () => {
    setSignedIn(false);
    setUser({});
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h1 style={{ color: "#282a36", textAlign: 'center' }}>Auction House</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
      }}>
        {data.map(auction => (
          <Auction key={auction.id} auctionInfo={auction} user={user} handleRefresh={handleRefresh} />
        ))}
      </div>
    </div>);
}

export default AuctionHousePage;