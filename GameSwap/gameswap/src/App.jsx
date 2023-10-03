import './App.css';
import AppRoutes from './AppRoutes';
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const userList = {
  "samee": "6411b548f0eb9069a37997d1",
  "alex": "64205c7868d81a7449c072e3",
}

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  useEffect(() => {
    let d = new Date();
    d.setTime(d.getTime() + (5 * 60 * 1000));
    setCookie("userId", user.userId, { path: "/", expires: d });
  }, [user]);

  useEffect(() => {
    if (cookies['userId'] !== undefined) {
      const userId = cookies['userId'];
      Object.entries(userList).forEach((itm) => {
        if (itm[1] === userId) {
          setUser({ username: itm[0], userId: itm[1] });
          setSignedIn(true);
        }
      })
    }
  }, []);

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
    removeCookie('userId');
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">GameSwap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Auction House</Nav.Link>
            <Nav.Link hidden={!signedIn} href="/create">Create Auction</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <div className="d-flex" style={{ textAlign: 'center' }}>
            <Button hidden={signedIn} onClick={() => setShowSignIn(true)} style={{ height: 50 }} >Sign-in</Button>
            <Navbar.Text hidden={!signedIn}>Signed in as: </Navbar.Text>
            <Navbar.Text style={{ color: "#ff79c6", marginLeft: 5, marginRight: 10 }}>{user.username}</Navbar.Text>
            <Button hidden={!signedIn} onClick={() => handleSignOut()} style={{ height: 50, alignSelf: 'center' }} href="/">Logout</Button>
          </div>
        </Container>
      </Navbar>
      <AppRoutes />

      <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
        <Modal.Header>
          <Modal.Title>Sign-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ marginTop: 5 }}>
            <Form.Group className="mb-3" controlId="controlUsername">
              <Form.Label>Username: </Form.Label>
              <Form.Control size="large" as="input" rows={3} value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="controlPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control size="large" as="input" rows={3} value={password} onChange={handlePasswordChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSignIn(false)} style={{ marginRight: 10 }}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignIn} style={{ backgroundColor: '#50fa7b', color: 'black' }}>
            Sign in!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;