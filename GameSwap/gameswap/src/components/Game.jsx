import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Game({ gameInfo }) {
    const [cookies] = useCookies(['userId']);

    const getUserId = () => cookies['userId'];

    const containerStyle = {
        background: '#282a36',
        padding: '20px',
        margin: '20px',
        width: '18rem',
        marginBottom: 30,
        border: '2px solid #646cff',
        borderRadius: '20px',
    }

    return (<Card style={containerStyle}>
        <Card.Img
            variant="top"
            src="https://img.freepik.com/premium-photo/cyberpunk-gaming-controller-gamepad-joystick-illustration_691560-5812.jpg"
            height={250} />
        <Card.Body>
            <Card.Title style={{ color: '#bd93f9' }}>{gameInfo.gameTitle}</Card.Title>
            <Card.Text style={{ color: 'white' }}>
                {gameInfo.gameDescription.substring(0, 150)}...
            </Card.Text>
            <Button variant="primary">Create auction! 💰</Button>
        </Card.Body>
    </Card>);
}

Game.propTypes = {
    gameInfo: PropTypes.object,
}

export default Game;