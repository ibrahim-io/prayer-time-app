import React from "react"

const PrayerBox = ({name, time}) => {
  return (
    <div className="prayer_box">
      <h3>{name}</h3>
      <h4>Adhan : {time}</h4>
      <p>Iqamah: 15 mins after</p>
    </div>
  )
}

export default PrayerBox