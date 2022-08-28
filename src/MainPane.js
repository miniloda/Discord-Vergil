import UpperPane from "./UpperPane";
import RightPane from "./RightPane";
const MainPane = () => {
    return(
        <div className = "relative left-120 w-full h-full bg-opacity-40 bg-black text-white">
            <UpperPane />
            <RightPane />
         </div>
    )
}
export default MainPane;
