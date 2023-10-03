import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Game from './../components/Game';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

function CreateAuctionPage() {
    const [cookies] = useCookies(['userId']);
    const [games, setGames] = useState([]);


    const getGames = async () => {
        await axios.get(`${baseUrl}/games/all`)
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                return undefined;
            })
    }

    useEffect(() => {
        getGames();
    }, []);

    return <div style={{ marginTop: 40 }}>
        <h1 style={{ color: "#282a36", textAlign: 'center' }}>Create Auction</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
        }}>
            {games && games.map(g => (
                <Game key={g.id} gameInfo={g} />
            ))}
        </div>
    </div>
}

export default CreateAuctionPage;