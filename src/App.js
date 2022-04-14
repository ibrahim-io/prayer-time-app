import { useEffect, useState } from "react";
import axios from 'axios'
import PrayerBox from "./components/PrayerBox";



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
  const currMonth = now.toLocaleString('default', {month: 'long'}).toLowerCase()
  const [day,month,year] = time[0].split("/")
  const [monthTimes, setMonthTimes] = useState({})
  const date_lookup = `${year}-${month}-${day}`
  setInterval(() => setNow(new Date()), 60000)
  useEffect(() => {
    axios.get(`https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.REACT_APP_API_KEY}&year=2022&month=${currMonth}&24hours=true`).then(res => {
      setMonthTimes(res.data.times)
    })
  },[month])
  if(Object.keys(monthTimes).length !== 0) {
    return (
      <>
        <div className="header">
          <h1>Prayer Times</h1>
        </div>
        <div className="curr_time_box"> 
          <div className="curr_time">{time[1].match(/..:../)}</div> 
          <div className="date">{time[0]}</div>
        </div>
        <div className="prayer_container">
          <Fajr time={monthTimes[date_lookup]["fajr"]}/>
          <Sunrise time={monthTimes[date_lookup]["sunrise"]}/>
          <Dhuhr time={monthTimes[date_lookup]["dhuhr"]}/>
        </div>
        <div className="prayer_container">
          <Asr time={monthTimes[date_lookup]["asr"]}/>
          <Maghrib time={monthTimes[date_lookup]["maghrib"]}/>
          <Isha time={monthTimes[date_lookup]["isha"]}/>
        </div>
      </> 
    )
  }
  
}

export default App;
