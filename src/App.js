import { useState } from "react";

const App = () => {
  [now, setNow] = useState(new Date())
  return (
    <>
      <h1>Prayer Times</h1>
    </> 
  )
}

export default App;
