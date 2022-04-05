import { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(new Date())
  const regex = /..:..:../
  const time = regex.exec(now.toISOString())[0]
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
      <h1>Prayer Times</h1>
      <div className="curr_time_box"> {time} </div>
      {prayers.map(p => {
        return (<div className="prayer_box" key={p.name}>{p.name} : {p.time}</div>)
      })}
    </> 
  )
}

export default App;
