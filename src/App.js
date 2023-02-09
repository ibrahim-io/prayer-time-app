import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAsync } from "./hooks/useAsync";

import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";

const App = () => {
  console.log(process.env.REACT_APP_API_KEY);
  // media query stuff
  const matches = useMediaQuery("(max-width: 900px)")
  const [counter, setCounter] = useState(Math.floor(Math.random() * 1895));
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setNow(new Date())
    }, 1000);
    const counterIntervalId = setInterval(() => {
      setCounter(Math.floor(Math.random() * 1895))
    }, 45000);
      
    // cleanup function
    return () => {
      clearInterval(counterIntervalId)
      clearInterval(timeIntervalId);
    };
  }, [counter]);

  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();

  const { execute, status, value, error } = useAsync(async () => {
    console.log("Requesting londonprayertimes");
    const res1 = await fetch(`https://www.londonprayertimes.com/api/times/?format=json&key=9fa65efc-3a14-4636-af03-98a7b51c401f&year=${year}&month=${month}&24hours=true`);
    // const res2 = await fetch('https://ahadith-api.herokuapp.com/api/ahadith/all/en')
    // const res3 = await fetch('https://ahadith-api.herokuapp.com/api/ahadith/all/ar-tashkeel')
    if (res1.ok /*&& res2.ok && res3.ok*/) {
      return [
        (await res1.json()).times, 
        // (await res2.json()).AllChapters, 
        // (await res3.json()).AllChapters
      ];
    }
    throw new Error(`Request returned with HTTP status code: ${res1.status}`);
  }, false);
  useEffect(() => {
    execute();
  }, [month]);
  
  if (status === "error") {
    return <div className="errorBar">{ error.message }</div>;
  }

  if (status === "pending") {
    return <div className="loader"></div>;
  }

  if (status === "success") {
    if (!matches) {
      return (
        <div className="outerScreen">
          <LeftScreen now={now} prayers={value[0][`${year}-${month}-${day}`] }/>
          <RightScreen />
        </div>
      );
    } else {
      return (
        <div className="outerScreen">
          <LeftScreen now={now} prayers={value[0][`${year}-${month}-${day}`] }/>
        </div>
      )
    }
    
  }

  return <div>Unknown State { status }</div>
};

export default App;
