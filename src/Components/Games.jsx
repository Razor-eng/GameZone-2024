/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi";
import Banner from "./Banner";
import Trending from "./Trending";
import GamesByGenres from "./GamesByGenres";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../Context/GameContext";

const Games = ({ genreId, genreName }) => {
    const [gameList, setGameList] = useState([]);
    const [genreGameList, setGenreGameList] = useState([]);
    const { setGame } = useContext(GameContext);

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            setGameList(resp.data.results);
            setGenreGameList(resp.data.results);
        })
    }
    const getGameListByGenreId = (id) => {
        GlobalApi.getGameListByGenreId(id).then((resp) => {
            setGameList(resp.data.results);
            setGenreGameList(resp.data.results);
        })
    }
    useEffect(() => {
        if (genreId === 0) {
            getAllGamesList();
        } else {
            getGameListByGenreId(genreId);
        }
    }, [genreId])

    function refreshPage() {
        window.location.reload(false);
    }

    const navigate = useNavigate();
    const gamePage = (data) => {
        setGame(data);
        localStorage.setItem('game', JSON.stringify(data));
        navigate(`/${data.name.split(' ').join('')}`);
    }

    return (
        <div>
            {
                (gameList?.length > 0 && genreGameList?.length > 0) ? (
                    <div>
                        <Banner gameBanner={gameList[0]} />
                        <Trending gameList={gameList} gamePage={gamePage} />
                        <GamesByGenres gameList={genreGameList} genreName={genreName} gamePage={gamePage} />
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-[90vh]">
                        <h2 className="dark:text-white text-3xl flex flex-col justify-center items-center">
                            😔 No Data Found!
                            <span className="text-lg mt-4 text-zinc-500 cursor-pointer hover:underline" onClick={refreshPage}>Try Again</span>
                        </h2>
                    </div>
                )
            }
        </div>
    )
}

export default Games