import useMediaQuery from "@mui/material/useMediaQuery"
import React from "react"

const PrayerBox = ({nextPrayer,name, adhan_time, iqamah_time}) => {
  const matches = useMediaQuery('(max-width: 900px)')
  let style = {
    'width': '16.3vw',
    'margin': '0',
    'marginLeft': '5vw',
  }
  let boxStyle = {}
  if (name.toLowerCase() === nextPrayer) {
    boxStyle = {
      'border': '2px white solid',
      'color': 'white',
      'backgroundColor': 'burlywood'
    }
  }
  if (!matches) {
    return (
      <div className="prayer_box" style={boxStyle}>
        <div style={{'width': '10vw'}}>
          <h3>{name}</h3>
        </div>
        <div style={style}>
          <h4>Adhan : {adhan_time}</h4>
        </div>
        <div style={style}>
          <p>Iqamah: {iqamah_time}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="prayer_box" style={boxStyle}>
        <div>
          <p style={{'fontWeight': '200'}}>{name}</p>
        </div>
        <div>
          <h4 style={{'fontSize': '2em', 'margin': '0'}}>{adhan_time}</h4>
        </div>
        <div>
          <p style={{'fontWeight': '200', 'fontSize': '0.9em'}}>Iqamah: {iqamah_time}</p>
        </div>
      </div>
    )
  }
  
}

export default PrayerBox