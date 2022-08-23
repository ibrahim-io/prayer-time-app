import { useEffect, useState } from "react";
import axios from 'axios'
import PrayerBox from "./components/PrayerBox";

const Sunrise = ({time}) => {
  return (
    <div className="prayer_box">
      <h3>Sunrise: {time}</h3>
    </div>
  )
}
const App = () => {
  const [now, setNow] = useState(new Date())
  const time = now.toLocaleString().split(",")
  const currMonth = now.toLocaleString('default', {month: 'long'}).toLowerCase()
  const [month_,day,year] = time[0].split("/")
  const month = month_.length === 1 ? '0' + month_ : month_
  const [monthTimes, setMonthTimes] = useState({})
  const prayers = monthTimes[`${year}-${month}-${day}`]
  setInterval(() => setNow(new Date()), 60000)
  useEffect(() => {
    axios.get(`https://www.londonprayertimes.com/api/times/?format=json&key=9fa65efc-3a14-4636-af03-98a7b51c401f&year=2022&month=${currMonth}&24hours=true`).then(res => {
      setMonthTimes(res.data.times)
    })
  },[month])
  if(Object.keys(monthTimes).length !== 0) {
    return (
      <div>
        <div className="header">
          <h1>Prayer Times</h1>
        </div>
        <div className="curr_time_box"> 
          <div className="curr_time">{time[1].match(/..:../)}</div> 
          <div className="date">{time[0]}</div>
        </div>
        <div className="prayer_container">
          <PrayerBox name="Fajr" adhan_time={prayers['fajr']} iqamah_time={prayers['fajr_jamat']}/>
          <Sunrise time={prayers["sunrise"]}/>
          <PrayerBox name="Dhuhr" adhan_time={prayers['dhuhr']} iqamah_time={prayers['dhuhr_jamat']}/>
        </div>
        <div className="prayer_container">
          <PrayerBox name="Asr" adhan_time={prayers['asr']} iqamah_time={prayers['asr_jamat']}/>
          <PrayerBox name="Maghrib" adhan_time={prayers['magrib']} iqamah_time={prayers['magrib_jamat']}/>
          <PrayerBox name="Isha" adhan_time={prayers['isha']} iqamah_time={prayers['isha_jamat']}/>
        </div>
        <p className="footer">Times are based on London Central Mosque</p>
      </div> 
    )
  }
  
}

export default App;
