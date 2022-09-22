import React from "react"

const PrayerBox = ({nextPrayer,name, adhan_time, iqamah_time}) => {
  let style = {
    'width': '16.3vw',
    'marginLeft': '10vw',
  }
  let boxStyle = {}
  if (name.toLowerCase() === nextPrayer) {
    boxStyle = {
      'border': '2px white solid',
      'color': 'white',
      'backgroundColor': 'burlywood'
    }
  }
  return (
    <div className="prayer_box" style={boxStyle}>
      <div style={{'width': '16vw'}}>
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
}

export default PrayerBox