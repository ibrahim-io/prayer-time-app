import { useEffect, useState } from "react";

import { useAsync } from "./hooks/useAsync";

import LeftScreen from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";

const App = () => {
  //The hadiths below are just placeholders while we wait for our API Key
  const engHadith = ['Ibn \'Umar (May Allah be pleased with them) reported:' + 
  'Messenger of Allah (ﷺ) passed by a man of the Ansar who was admonishing his ' +
  'brother regarding shyness. Messenger of Allah (ﷺ) said, "Leave him alone, for modesty is a part of Iman."'+
  '[Al-Bukhari and Muslim].', '\'Imran bin Husain (May Allah be pleased with them) reported:'+
  'Messenger of Allah (ﷺ) said, "Shyness does not bring anything except good."'+
  '[Al-Bukhari and Muslim].', 'Abu Hurairah (May Allah be pleased with him) reported:' +
  'Messenger of Allah (ﷺ) said, "Iman has sixty odd or seventy odd branches.' + 
  'The uppermost of all these is the Testimony of Faith: \'La ilaha illallah\' (there is no true god except Allah)' + 
  'while the least of them is the removal of harmful object from the road. And shyness is a branch of Iman."'+
  '[Al-Bukhari and Muslim].']

  const arabicHadith = ['وعن ابن عمر رضي الله عنهما أن رسول الله صلى الله عليه وسلم مر على رجل من الأنصار وهو يعظ أخاه في الحياء، فقال رسول الله صلى الله عليه وسلم‏:‏ "دعه فإن الحياء من الإيمان" ‏(‏‏(‏متفق عليه‏)‏‏)‏ ‏.‏',
                        'وعن عمران بن حصين، رضي الله عنهما، قال‏:‏ قال رسول الله صلى الله عليه وسلم‏:‏ “ الحياء لا يأتى إلا بخير” ‏(‏‏(‏متفق عليه‏)‏‏)‏ ‏.‏',
                        'وعن أبى هريرة رضي الله عنه، أن رسول الله صلى الله عليه وسلم قال‏:‏ “الإيمان بضع وسبعون، أو بضع وستون شعبة، فأفضلها قول لا إله إلا الله، وأدناها إماطة الأذى عن الطريق، والحياء شعبة من الإيمان” ‏(‏‏(‏متفق عليه‏)‏‏)‏ ‏.',
                      ]

  const [counter, setCounter] = useState(0);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setNow(new Date())
    }, 1000);
    const counterIntervalId = setInterval(() => {
      if (counter < 2) {
        setCounter(counter+1)
      } else {
        setCounter(0)
      }
    }, 15000);
      
    // cleanup function
    return () => {
      clearInterval(counterIntervalId)
      clearInterval(timeIntervalId);
    };
  }, [counter]);

  const day = ("0" + now.getDate()).slice(-2);
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const year = now.getFullYear();

  const { execute, status, value: monthTimes, error } = useAsync(async () => {
    console.log("Requesting londonprayertimes");
    const res = await fetch(`https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.REACT_APP_API_KEY}&year=${year}&month=${month}&24hours=true`);
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
        <RightScreen arabicHadith={arabicHadith} engHadith={engHadith} counter={counter} />
      </div>
    );
  }

  return <div>Unknown State { status }</div>
};

export default App;
