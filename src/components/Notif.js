
const Notif = ({boolean}) => {
  if (boolean) {
    console.log('we made it herererer');
    return (
      <div style={{
        'position':'fixed',
        'backgroundColor': 'black', 
        'width': '100vw', 
        'height': '100vh', 
        'zIndex': '1',
        'marginLeft':'50vw' 
        }}>
        <p style={{'color': 'red'}}>It is now time for prayer</p>
      </div>
    )
  } 
}

export default Notif