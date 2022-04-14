import React from "react"

const PrayerBox = ({name, adhan_time, iqamah_time}) => {
  return (
    <div className="prayer_box">
      <h3>{name}</h3>
      <h4>Adhan : {adhan_time}</h4>
      <p>Iqamah: {iqamah_time}</p>
    </div>
  )
}

export default PrayerBox