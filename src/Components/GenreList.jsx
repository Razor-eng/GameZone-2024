/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"

const GenreList = ({ setGenreId, setGenreName }) => {
    const [genres, setGenres] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            setGenres(resp.data.results);
        })
    }
    useEffect(() => {
        getGenreList()
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold dark:text-white mb-4">Genre</h2>
            {genres.map((item, id) => (
                <div
                    key={id}
                    className={`flex gap-3 items-center mb-2 cursor-pointer hover:bg-gray-300 p-4 rounded-lg hover:dark:bg-gray-600 group ${activeIndex === id ? "bg-zinc-200 dark:bg-zinc-700" : ""}`}
                    onClick={() => (
                        setActiveIndex(id),
                        setGenreId(id),
                        setGenreName(item.name)
                    )}
                >
                    <img
                        src={item.image_background}
                        alt="genre"
                        className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-200 ${activeIndex === id ? "scale-105" : ""}`}
                    />
                    <h3 className={`dark:text-white text-xl group-hover:font-bold transition-all ease-in-out duration-200 ${activeIndex === id ? "font-bold" : ""}`}>
                        {item.name}
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList