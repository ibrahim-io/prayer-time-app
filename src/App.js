import { useEffect, useState } from "react";
import * as data from './April_Prayer_Times.json'

const PrayerBox = ({name, time}) => {
  return (
    <div className="prayer_box">
      <h3>{name}</h3>
      <h4>Adhan : {time}</h4>
      <p>Iqamah: 15 mins after</p>
    </div>
  )
}

const Fajr = ({time}) => {
  return <PrayerBox name="Fajr" time={time} />
}
const Sunrise = ({time}) => {
  return (
    <div className="prayer_box">
      <h3>Sunrise: {time}</h3>
    </div>
  )
}
const Dhuhr = ({time}) => {
  return <PrayerBox name="Dhuhr" time={time} />
}
const Asr = ({time}) => {
  return <PrayerBox name="Asr" time={time} />
}
const Maghrib = ({time}) => {
  return <PrayerBox name="Maghrib" time={time} />
}
const Isha = ({time}) => {
  return <PrayerBox name="Isha" time={time} />
}


const App = () => {
  const [now, setNow] = useState(new Date())
  const time = now.toLocaleString().split(",")
  const regex = /../.exec(time[0])[0]
  const day_of_month = regex[0] === '0' ? regex[1] : regex
  const day_data = data[parseInt(day_of_month)-1]

  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
  }, [])

  return (
    <>
      <div className="header">
        <h1>Prayer Times</h1>
      </div>
      <div className="curr_time_box"> 
        <div className="curr_time">{time[1]}</div> 
        <div className="date">{time[0]}</div>
      </div>
      <div className="prayer_container">
        <Fajr time={day_data["Fajr"]}/>
        <Sunrise time={day_data["Sunrise"]}/>
        <Dhuhr time={day_data["Dhuhr"]}/>
      </div>
      <div className="prayer_container">
        <Asr time={day_data["Asr"]}/>
        <Maghrib time={day_data["Maghrib"]}/>
        <Isha time={day_data["Isha"]}/>
      </div>
    </> 
  )
}

export default App;
