import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {FaDiscord, FaPoo} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
const SideBar = (props) => {
    const iconsId = [
        "discord-icon",
        "poo-icon",
        "lightning-icon",
        "add-icon",
        'shan-icon',
        "ruch-icon",
        "edward-icon"
    ]
    const [activeElement, setActiveElement] = useState("discord-icon");
    function updateActiveElement(iconId){
        setActiveElement(iconId);
    }
    useEffect(() => {
        console.log(activeElement);
        for(let i = 0; i < iconsId.length; i++){
            document.getElementById(iconsId[i]).classList.remove("active");
        }
        if(document.querySelector(`#${activeElement}`)!==null){
        document.querySelector(`#${activeElement}`).classList.add("active");
        }
    });

return(
    <div className = "fixed top-0 left-0 h-screen w-20 m-0 flex flex-col shadow bg-opacity-0 text-white">
        <SideBarIcon icon = {<FaDiscord size = "28" color = "white" />}  text = {"Direct Messages"} onClick={() => updateActiveElement("discord-icon")} id = "discord-icon"/>
            <button className = "public "> public
        </button>
        <div className = "mt-2 mb-4 mx-4">
        <hr className='border-slate-300'></hr>

        </div>
        <SideBarIcon icon ={
            <img src = "./shan.jpg" className = "sidebar-icon"></img> } text = {"shan"} id = "shan-icon" onClick={() => updateActiveElement("shan-icon")}/>
        <SideBarIcon icon ={
            <img src = "./ruch.jpg" className = "sidebar-icon"></img> } text = {"ruch"} id = "ruch-icon" onClick={() => updateActiveElement("ruch-icon")}/>
        <SideBarIcon icon ={
            <img src = "./edward.jpg" className = "sidebar-icon"></img> } text = {"edward"} id = "edward-icon" onClick={() => updateActiveElement("edward-icon")}/>
        <SideBarIcon icon = {<BsPlus size = "32" />} text = {"add"} onClick={() => updateActiveElement("add-icon")} id = "add-icon"/>
        <SideBarIcon icon = {<BsFillLightningFill size = "20" />} text = "fill" id = "lightning-icon" onClick={() => updateActiveElement("lightning-icon")}/>
        <SideBarIcon icon = {<FaPoo size = "28" />} text = "poo" id = "poo-icon" onClick={() => updateActiveElement("poo-icon")}/>
    </div>
)
}
const SideBarIcon = ({icon, text,id, active, onClick}) => {
    return(
    <div className="sidebar-icon group"  onClick={onClick} id ={id} >
        <div className="sidebar-icon-style">

        </div>
        {icon}
        <span className = "sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
}
export default SideBar;