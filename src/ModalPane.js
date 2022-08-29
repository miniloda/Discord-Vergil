import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
const ModalPane = (props) =>{
    return(
      props.open ? (
        <div className = "absolute h-screen w-screen bg-black bg-opacity-50 rounded border-black flex justify-center items-center" onClick = {props.onClose}>
          <div className = " w-80 h-80 border-2 border-black rounded-xl ">
            sm
          </div>
        </div>
      ) : null
    )

}
export default ModalPane;