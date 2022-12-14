import { useEffect, useState } from 'react';
import {FaUserFriends} from 'react-icons/fa';
const nitro = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M6 4H15V6H6V4zM5.5 7.5H8.5V9.5H5.5V7.5zM2 7.5H3.5V9.5H2V7.5zM4 11.5H8V13.5H4V11.5z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M7 12C7 7.58172 10.5817 4 15 4C19.4183 4 23 7.58172 23 12C23 16.4183 19.4183 20 15 20C10.5817 20 7 16.4183 7 12ZM13 8C12.6656 8 12.3534 8.1671 12.1679 8.4453L10.1679 11.4453C9.94402 11.7812 9.94402 12.2188 10.1679 12.5547L12.1679 15.5547C12.3534 15.8329 12.6656 16 13 16H17C17.3344 16 17.6466 15.8329 17.8321 15.5547L19.8321 12.5547C20.056 12.2188 20.056 11.7812 19.8321 11.4453L17.8321 8.4453C17.6466 8.1671 17.3344 8 17 8H13ZM12.2019 12L13.5352 10H16.4648L17.7981 12L16.4648 14H13.5352L12.2019 12Z" clip-rule="evenodd"/></svg>
const DirectMessagesMenu = () => {
    const componentId = ["friends" ,"nitro"]
    const [active, setActive] = useState("");
    const handleActiveChange = (newActive) => {
    
        setActive(newActive);
    }
    useEffect(() =>{
        console.log(active)
        if (document.getElementById(`${active}`)!==null){
        for(let i = 0; i < componentId.length; i++){
            document.getElementById(componentId[i]).classList.remove("dm-active");
        }
        document.getElementById(`${active}`).classList.add("dm-active");
        document.getElementById(`${active}`).classList.remove("hover:bg-opacity-10");
        document.getElementById(`${active}`).classList.remove("hover:bg-slate-200");
        
    }
    })
    return(
        <>
<DMMComponent icon = {<FaUserFriends className ="text-gray-500" />} text = "Friends" onClick = {() =>handleActiveChange("friends")} id = "friends"/>
<DMMComponent icon = {nitro} text = "Nitro" onClick = {() => handleActiveChange("nitro")} id ="nitro"/>
        </>
    )
}
const DMMComponent = ({icon, text, onClick, id})=>{
    return (<div className = "w-full p-2 h-14  relative " onClick={onClick}>
    <div className = "h-full w-full hover:bg-slate-200 hover:bg-opacity-10 hover:cursor-pointer p-2 rounded-md hover:text-gray-400" id ={id} >
        <div className = "h-full w-1/2  flex justify-around items-center">

        {icon}

        <p className="text-gray-500 text-sm ">
        {text}
         </p>
        </div>
        
    </div>
</div>
    )
}
export default DirectMessagesMenu;