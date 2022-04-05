import { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(new Date())
  const time = now.toLocaleString().split(",")
  const prayers = [
    {
      name: "Fajr",
      time: "5:00"
    },
    {
      name: "Shuruq",
      time: "6:00"
    },
    {
      name: "Dhuhr",
      time: "13:00"
    },
    {
      name: "Asr",
      time: "17:00"
    },
    {
      name: "Maghrib",
      time: "19:50"
    },
    {
      name: "Isha",
      time: "22:00"
    },
  ]

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
      {prayers.map(p => {
        return (<div className="prayer_box" key={p.name}>{p.name} : {p.time}</div>)
      })}
    </> 
  )
}

export default App;
