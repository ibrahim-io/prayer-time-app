import { useEffect, useState } from "react";

import { useAsync } from "./hooks/useAsync";

import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";

const App = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timeIntervalId = setInterval(() => setNow(new Date()), 1000);
    // cleanup function
    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);

  const day = now.getDate();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();

  const { execute, status, value: monthTimes, error } = useAsync(async () => {
    console.log("Requesting londonprayertimes");
    const res = await fetch(`https://www.londonprayertimes.com/api/times/?format=json&key=9fa65efc-3a14-4636-af03-98a7b51c401f&year=${year}&month=${month}&24hours=true`);
    if (res.ok) {
      return (await res.json()).times;
    }
    throw new Error(`Request returned with HTTP status code: ${res.status}`);
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
    return (
      <div className="outerScreen">
        <LeftScreen now={now} prayers={monthTimes[`${year}-${month}-${day}`]} />
        <RightScreen />
      </div>
    );
  }

  return <div>Unkown State { status }</div>
};

export default App;
