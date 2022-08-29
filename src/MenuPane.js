import {BsFillGearFill} from 'react-icons/bs'
import {TbHeadphonesOff} from 'react-icons/tb'
import {TbHeadphones} from 'react-icons/tb'
import {BiMicrophone} from 'react-icons/bi'
import {BiMicrophoneOff} from 'react-icons/bi'
import {useState, useEffect} from 'react';

const MenuPane = ({handleOpen}, props)=>{
   const [isMuted, setMuted] = useState(false);
   const [isDeafend, setDeafend] = useState(false);
   const mutedAudio = new Audio(require("./assets/discord-muted.mp3"))
   const unmutedAudio = new Audio(require("./assets/discord-unmuted.mp3"))
   function mute(){
      console.log("?")
       setMuted(true);
       mutedAudio.play();
   }
   function unmute(){
         setMuted(false);
         unmutedAudio.play();
   }
   return( <div className = "fixed top-0 left-16 h-screen w-56 flex flex-col shadow bg-opacity-20 bg-black text-white">
         <div className = "w-full h-14 border-b border-slate-600 flex justify-center items-center">
            <div className = "bg-gray-700 h-8 rounded-md w-48 bg-opacity-70 flex items-center hover:cursor-pointer"  onClick = {handleOpen}>
               <button className = "text-gray-500 text-xs p-2">
                  Find or start a conversation
               </button>
            </div>
            <div className = "fixed w-56 h-12 bg-black bottom-0 bg-opacity-20 flex items-center menu-settings">
               <div className = "w-28">

               </div>
               <div className = "w-28 flex justify-evenly">

               <div className = "">

               {isMuted ? <BiMicrophoneOff size = "20" className = "text-gray-400 text-2xl hover:cursor-pointer" onClick = {() => unmute(false)}/> : <BiMicrophone size = "20" className  = "text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-300" onClick = {()=>mute(true)}/>}
               </div>
               <div className = "h-6 border-r border-gray-600">

               </div>
               <div className = "">
               {isDeafend ? <TbHeadphonesOff size = "20" className = "text-gray-400 hover:cursor-pointer" onClick = {()=>setDeafend(false)} /> : <TbHeadphones size = "20" className = "text-gray-500 hover:cursor-pointer hover:text-gray-300" onClick = {()=>setDeafend(true)}/>}

               </div>
               <div className = "h-6 border-r border-gray-600">

               </div>
               <div className = "px-1">
               <button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button">
               <BsFillGearFill size = "20" className = "text-gray-400 hover:cursor-pointer" />

               </button>
               </div>
               <div id="tooltip-hover" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
               </div>
            </div>
         </div>
    </div>
   )
}
export default MenuPane;