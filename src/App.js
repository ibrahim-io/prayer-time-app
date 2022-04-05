import { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(new Date())
  const regex = /..:..:../
  const time = regex.exec(now.toISOString())[0]

  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
  }, [])

  return (
    <>
      <h1>Prayer Times</h1>
      <div className="curr_time_box"> {time} </div>
    </> 
  )
}

export default App;
