/* eslint-disable react/prop-types */
const Trending = ({ gameList, gamePage }) => {
    return (
        <div className="mt-5 hidden md:block mb-5">
            <h2 className="font-bold text-3xl dark:text-white">
                Trending Games
            </h2>
            <div className="hidden mt-5 md:grid md:grid-cols-3 gap-4 lg:grid-cols-4">
                {gameList.map((item, id) => id < 4 && (
                    <div key={id} className="bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => gamePage(item)}>
                        <img
                            src={item.background_image}
                            alt="Trednfing Games"
                            className="h-[260px] rounded-t-lg object-cover"
                        />
                        <h2 className="dark:text-white text-lg p-2">{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending