/* eslint-disable react/prop-types */
const Banner = ({ gameBanner }) => {
    return (
        <div className="hidden sm:block relative mt-2">
            <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-800 to-transparent w-full">
                <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
                <button className="bg-blue-700 mt-2 text-lg text-white px-2 p-1 rounded-lg">Get Now</button>
            </div>
            <img
                src={gameBanner.background_image}
                alt="Game banner"
                className="md:h-[400px] w-full object-fill rounded-xl"
            />
        </div>
    )
}

export default Banner