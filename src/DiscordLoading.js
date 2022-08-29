import "./index.css"


const DiscordLoading = () => {
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
            <div className = "relative w-fit h-auto">
            <img src = {require("./assets/spin-discord-logo.gif")}>

            </img>
            <div className = "absolute w-full h-40 flex justify-center items-start bottom-0 left-0">
            <h1 className = "text-white text-xl">
                Loading...

            </h1>

            </div>
            </div>
        </div>
    )
}
export default DiscordLoading;