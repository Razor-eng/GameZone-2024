/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const GamePage = () => {
    const [game, setGame] = useState(JSON.parse(localStorage.getItem('game')));

    useEffect(() => {
        setGame(JSON.parse(localStorage.getItem('game')))
    }, [])

    return (
        <div className="h-[90vh] w-[100vw] overflow-scroll lg:overflow-hidden border-t bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 md:p-10">
            <div className="flex gap-4 flex-col lg:flex-row mt-0 sm:mt-5">
                <div className="md:w-full w-[100vw] bg-zinc-200 dark:bg-zinc-800 p-2 shadow-md rounded-lg shadow-zinc-800 dark:shadow-zinc-200">
                    <img src={game.background_image} alt="game image" className="w-full h-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 pl-2 md:pl-0">
                    <h2 className="dark:text-white text-2xl font-bold">{game.name}</h2>
                    <p className="text-lg dark:text-white">Released :
                        <span className="text-sm"> {game.released.split("-").reverse().join('-')}</span>
                    </p>
                    <p className="text-lg dark:text-white">Genre :
                        {game.genres.map((genre, id) => (
                            <span key={id} className="text-sm">
                                {" "}{genre.name}
                                {(id < game.genres.length - 1) && ","}
                            </span>
                        ))}
                    </p>
                    <p className="text-lg dark:text-white">Ratings :
                        <span className="text-sm"> {game.rating}⭐</span>
                    </p>
                    {
                        game.short_screenshots &&
                        <div className="mt-2 flex flex-col gap-2">
                            <h2 className="dark:text-white text-lg underline underline-offset-4">Screenshots:</h2>
                            <div className="flex gap-6 flex-wrap">
                                {game.short_screenshots.map((screenshot, id) => id !== 0 && (
                                    <img key={id} src={screenshot.image} alt="screenshot" className="w-48 object-contain rounded-md" />
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GamePage