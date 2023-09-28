import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Auction from './components/Auction';
import { Button, Form, Modal } from 'react-bootstrap'
const userList = {
  "samee": "6411b548f0eb9069a37997d1",
  "alex": "64205c7868d81a7449c072e3",
}
const baseUrl = import.meta.env.VITE_API_URL;

function App() {
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

  useEffect (() => {
    getAuctions();
  }, []);


  const handleRefresh = () => {
    getAuctions();
  }

  const handleSignIn = () => {
    if (userList[username] !== undefined) {
      setUser({username: username, userId: userList[username]});
      setSignedIn(true);
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
  <div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
      <Button hidden={signedIn} onClick={() => setShowSignIn(true)} style={{height: 50}} >Sign-in</Button>
      <h2 hidden={!signedIn} style={{ color: "#ff79c6", marginRight: 10}}>Welcome, {user.username}</h2>
      <Button hidden={!signedIn} onClick={() => handleSignOut()} style={{height: 50, alignSelf: 'center'}}>Logout</Button>
    </div>
    <h1 style={{color: "#282a36"}}>Auction House</h1>
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

    <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
      <Modal.Header>
        <Modal.Title>Sign-In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{marginTop: 5}}>
          <Form.Group className="mb-3" controlId="controlUsername">
            <Form.Label>Username: </Form.Label>
            <Form.Control size="large" as="input" rows={3} value={username} onChange={handleUsernameChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="controlPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control size="large" as="input" rows={3} value={password} onChange={handlePasswordChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowSignIn(false)} style={{ marginRight: 10}}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignIn} style={{ backgroundColor: '#50fa7b', color: 'black'}}>
          Sign in!
        </Button>
      </Modal.Footer>
    </Modal>
  </div>);
}

export default App;