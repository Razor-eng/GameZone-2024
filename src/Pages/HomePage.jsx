import { useState } from "react"
import Games from "../Components/Games"
import GenreList from "../Components/GenreList"

const HomePage = () => {
    const [genreId, setGenreId] = useState(0);
    const [genreName, setGenreName] = useState("Action");

    return (
        <div className="grid grid-cols-5 h-[90vh] overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
            <div className="hidden md:block px-6 overflow-y-hidden hover:overflow-y-scroll border-r border-zinc-200 dark:border-zinc-800 h-[90vh]" id="scroll-1">
                <GenreList setGenreId={setGenreId} setGenreName={setGenreName} />
            </div>
            <div className="col-span-4 px-8 md:col-span-4 overflow-y-scroll scrollbar-none md:scrollbar" id="scroll-2">
                <Games genreId={genreId} genreName={genreName} />
            </div>
        </div>
    )
}

export default HomePage