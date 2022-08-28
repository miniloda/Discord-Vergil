import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {FaFire, FaPoo} from 'react-icons/fa';

const SideBar = () => {
return(
    <div className = "fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow bg-gray-900 text-white">
        <SideBarIcon icon = {<FaFire size = "28" />}  text = {"fire"} />
        <SideBarIcon icon = {<BsPlus size = "32" />} text = {"add"}/>
        <SideBarIcon icon = {<BsFillLightningFill size = "20" />} text = "fill"/>
        <SideBarIcon icon = {<FaPoo size = "28" />} text = "poo"/>
    </div>
)
}
const SideBarIcon = ({icon, text}) => {
    return(
    <div className="sidebar-icon group">
        {icon}
        <span className = "sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
}
export default SideBar;