import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import MenuPane from './MenuPane';
import MainPane from './MainPane';
import { useState } from 'react';
import ModalPane from './ModalPane';
export default function App() {
  const [open, setOpen] = useState(false);
   const handleOpen = () => { console.log("?")
   setOpen(true)
};
 const [isMobile, setIsMobile] = useState(false);
   const handleClose = () => {
    console.log("?")
    setOpen(false);
   }
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <MenuPane handleOpen = {handleOpen}/>
      <MainPane />
      <ModalPane open = {open} onClose = {handleClose}/>
    </div>
  )
}
