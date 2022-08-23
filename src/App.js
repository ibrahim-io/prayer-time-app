import { useEffect, useState } from "react";
import axios from 'axios'
import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";


const App = () => {
  const [now, setNow] = useState(new Date())
  const time = now.toISOString().split("T")
  const currMonth = now.toLocaleString('default', {month: 'long'}).toLowerCase()
  const [year,month,day] = time[0].split("-")
  const [monthTimes, setMonthTimes] = useState({})
  const prayers = monthTimes[`${year}-${month}-${day}`]
  setInterval(() => setNow(new Date()), 1000)
  useEffect(() => {
    axios.get(`https://www.londonprayertimes.com/api/times/?format=json&key=9fa65efc-3a14-4636-af03-98a7b51c401f&year=2022&month=${currMonth}&24hours=true`).then(res => {
      setMonthTimes(res.data.times)
    })
  },[month])
  if(Object.keys(monthTimes).length !== 0) {
    return (
      <div className="outerScreen">
        <LeftScreen time={time} prayers={prayers} />
        <RightScreen />
      </div>
    )
  }
  
}

export default App;
