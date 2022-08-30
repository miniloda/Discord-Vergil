import "./index.css"
import { useEffect } from "react";

const DiscordLoading = () => {
    // useEffect(() =>{
    //     const handleResize  = () => {
    //         document.querySelector("#spinning-logo").style.width = "80% !important";
    //         document.querySelector("#spinning-logo").style.height = "auto";
    //     }
    //     window.addEventListener("resize", handleResize)

    //     return () => {
    //         window.removeEventListener("resize", handleResize)
    //     }
    // })
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
            <div className = "relative w-fit h-auto">
            <img src = {require("./assets/spin-discord-logo.gif")} id= "spinning-logo">

            </img>
            <div className = "absolute w-full h-40 flex justify-center items-start bottom-0 left-0">
            </div>
            </div>
        </div>
    )
}
export default DiscordLoading;