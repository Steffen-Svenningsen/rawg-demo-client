import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<String>('');

    useEffect(() => {
        apiClient.get<GameResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch((err) => setError(err.message))
    }, [])

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    )
}

export default GameGrid
