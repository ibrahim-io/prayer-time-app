
const Notif = ({adhanBoolean, iqamahBoolean}) => {
  if (adhanBoolean) {
    return (
      <div className="notif">
        <p style={{'color': 'white', 'fontSize': '5em'}}>It is now time for the ADHAN</p>
      </div>
    )
  } 
  if (iqamahBoolean) {
    return (
      <div className="notif">
        <p style={{'color': 'white', 'fontSize': '5em'}}>It is now time for the IQAMAH</p>
      </div>
    )
  }
}

export default Notif