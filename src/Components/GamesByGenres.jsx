/* eslint-disable react/prop-types */
const GamesByGenres = ({ gameList, genreName, gamePage }) => {
    return (
        <div className="w-full border-t border-zinc-700">
            <h2 className="font-bold text-3xl dark:text-white mt-5">{genreName} Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {gameList.map((item, id) => (
                    <div key={id} className="dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-gray-500 p-3 rounded-lg h-96 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer" onClick={() => gamePage(item)}>
                        <img src={item.background_image} alt="game img" className="w-full h-[78%]" />
                        <h2 className="dark:text-white text-lg font-semibold">
                            {item.name}
                            <span className="p-1 rounded-sm ml-2 text-xs bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
                        </h2>
                        <div className="flex text-zinc-500 mt-1 gap-4">
                            <h2>⭐{item.rating}</h2>
                            <h2>💬{item.reviews_count}</h2>
                            <h2>🔥{item.suggestions_count}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamesByGenres