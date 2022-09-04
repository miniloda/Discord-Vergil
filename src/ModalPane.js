
const ModalPane = (props) =>{
    return(
      props.open ? (
        <div className = "absolute h-screen w-screen bg-black bg-opacity-50 rounded  flex justify-center items-center" onClick = {props.onClose}>
          <div className = "w-500px h-96 rounded flex flex-col justify-center items-center">
            <div>
              <p className = "text-white mb-2">
                Search for servers, channels or DMs
              </p>
            </div>
        <div className = " w-500px h-80 border-2 border-black rounded-xl bg-black bg-opacity-40 p-4 flex justify-center items-center flex-col">
            <div className = "w-full h-12 flex justify-center items-center">
              <input type = "text" className = "w-full h-12 rounded-md bg-gray-700 bg-opacity-70 text-gray-600 p-2" placeholder = "Where would you like to go?" />
            </div>
          </div>
          </div>
        </div>
      ) : null
    )

}
export default ModalPane;