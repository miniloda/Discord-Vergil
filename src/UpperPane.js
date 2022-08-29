import {AiFillQuestionCircle} from 'react-icons/ai'
import {HiOutlineInbox} from 'react-icons/hi'
const UpperPane = ()=>{
    return(
        <div className = "stick top-0 left-0 w-full h-14 bg-black bg-opacity-50">
            <div className  = "relative w-full h-full">
            <div className = "fixed top-0 right-0 w-24 h-14 flex items-center justify-center">
                <HiOutlineInbox className = "text-gray-600 text-2xl mx-2 hover:cursor-pointer hover:text-slate-50 transition-all duration-200 ease-linear"/>
                <AiFillQuestionCircle className = "text-gray-600 text-2xl mx-2 hover:cursor-pointer hover:text-slate-50 transition-all duration-200 ease-linear" />
            </div>

            </div>
        </div>
    )
}

export default UpperPane;