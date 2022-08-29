import {BsFillGearFill} from 'react-icons/bs'
import {TbHeadphonesOff} from 'react-icons/tb'
import {TbHeadphones} from 'react-icons/tb'
import {BiMicrophone} from 'react-icons/bi'
import {BiMicrophoneOff} from 'react-icons/bi'
import {useState} from 'react'
const MenuPane = ()=>{
   const [isMuted, setMuted] = useState(true);
   const [isDeafend, setDeafend] = useState(false);
   return( <div className = "fixed top-0 left-16 h-screen w-56 flex flex-col shadow bg-opacity-20 bg-black text-white">
         <div className = "w-full h-14 border-b border-slate-600 flex justify-center items-center">
            <div className = "bg-gray-700 h-8 rounded-md w-48 bg-opacity-70 flex items-center">
               <p className = "text-gray-500 text-xs p-2">
                  Find or start a conversation
               </p>
            </div>
            <div className = "fixed w-56 h-12 bg-black bottom-0 bg-opacity-20 flex items-center menu-settings">
               <div className = "w-28">

               </div>
               <div className = "w-28 flex justify-evenly">

               <div className = "">

               {isMuted ? <BiMicrophoneOff size = "20" className = "text-gray-400 text-2xl hover:cursor-pointer" onClick = {()=>setMuted(false)}/> : <BiMicrophone size = "20" className  = "text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-300" onClick = {()=>setMuted(true)}/>}
               </div>
               <div className = "h-6 border-r border-gray-600">

               </div>
               <div className = "">
               {isDeafend ? <TbHeadphonesOff size = "20" className = "text-gray-400 hover:cursor-pointer" onClick = {()=>setDeafend(false)}/> : <TbHeadphones size = "20" className = "text-gray-500 hover:cursor-pointer hover:text-gray-300" onClick = {()=>setDeafend(true)}/>}

               </div>
               <div className = "h-6 border-r border-gray-600">

               </div>
               <div className = " px-1">
               <BsFillGearFill size = "20" className = "text-gray-400 hover:cursor-pointer"/>

               </div>
               </div>
            </div>
         </div>
    </div>
   )
}
export default MenuPane;