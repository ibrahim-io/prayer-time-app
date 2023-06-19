import { useEffect, useState } from "react";
import Notif from "./Notif";
import PrayerBox from "./PrayerBox"
// yep
const LeftScreen = ({ now, prayers }) => {
  const [adhanNotif, setAdhanNotif] = useState(false)
  const [iqamahNotif, setIqamahNotif] = useState(false)
  //Used to get current time
  const time = now.toLocaleString("en-GB", { timeZone: "Europe/London" }).split(", ");
  //Hijri Calender Date  
  const hijri = new Intl.DateTimeFormat('ar-EN-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now())
  //Logic for the countdown of the next prayer
  const [prayerNameCounter, setPrayerNameCounter] = useState(0)
  const prayerNames = ['fajr', 'fajr_jamat', 'dhuhr', 'dhuhr_jamat', 'asr',
    'asr_jamat', 'magrib', 'magrib_jamat', 'isha', 'isha_jamat']
  const start = time[1].split(':')
  const tiime = prayers[prayerNames[prayerNameCounter]].split(':');
  //I've put in a dummy date below because that doesnt matter to the calculations
  let endDate = new Date(2020, 5, 5, tiime[0], tiime[1], 0);
  let startDate = new Date(2020, 5, 5, start[0], start[1], start[2])
  let difference = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
  //Calculation for fajr (sorry for the mess :|)
  if (prayerNameCounter == 0) {
    difference = 0
    //this checks if the time is past 12am
    // if it is then we dont need the intemediary calculation
    if (start[0][0] !== '0') {
      let intermediary1 = new Date(2020, 5, 5, '24', '00', '00')
      difference += Math.abs(intermediary1.getTime() - startDate.getTime()) / 1000;
    }
    let intermediary2 = new Date(2020, 5, 5, '00', '00', '00')
    difference += Math.abs(endDate.getTime() - intermediary2.getTime()) / 1000;
  }

  //Ensures that we are counting down to the next prayer
  if (difference < 0) {
    if (prayerNameCounter === 9) {
      setPrayerNameCounter(0)
    }
    setPrayerNameCounter(prayerNameCounter + 1)
  }
  useEffect(() => {
    if (hourDifference === '00' && minuteDifference === '00' && difference === '00') {
      if (prayerNames[prayerNameCounter].slice(-5) === 'jamat') {
        setIqamahNotif(true)
        setTimeout(() => {
          setIqamahNotif(false)
        }, 20000);
      } else {
        setAdhanNotif(true)
        setTimeout(() => {
          setAdhanNotif(false)
        }, 20000);
      }
    }
  }, [start[2]])
  let hourDifference = ('0' + Math.floor(difference / 3600)).slice(-2);
  difference -= hourDifference * 3600;
  let minuteDifference = ('0' + Math.floor(difference / 60)).slice(-2);
  difference -= minuteDifference * 60;
  difference = ('0' + difference).slice(-2)
  return (
    <div className="leftScreen">
      <Notif adhanBoolean={adhanNotif} iqamahBoolean={iqamahNotif} />
      <div className="curr_time_box">
        <div className="header">
          <div className="date">{time[0]}</div>
          <p className="title">{time[1].match(/..:../)}</p>
          <div className="date">{hijri}</div>
        </div>

        <p style={{ 'marginTop': '3vh' }} className="title">Prayer Times</p>
        <p >{prayerNames[prayerNameCounter].toUpperCase()} is in</p>
        <div className="countdown_timer">{hourDifference}:{minuteDifference}:{difference}</div>
        <div className="countdown_text">HOURS: MINS: SECS</div>
      </div>
      <div className="prayer_container">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <h3>Fajr, Weekends and Holidays:&nbsp;&nbsp;</h3>
          <p>Usually there are less students around at these time so it's not guaranteed you will find a jamat</p>
        </div>
        <PrayerBox nextPrayer={prayerNames[prayerNameCounter]} name="Dhuhr" adhan_time={prayers['dhuhr']} iqamah_time={prayers['dhuhr_jamat']} />
        <PrayerBox nextPrayer={prayerNames[prayerNameCounter]} name="Asr" adhan_time={prayers['asr']} iqamah_time={prayers['asr_jamat']} />
        <PrayerBox nextPrayer={prayerNames[prayerNameCounter]} name="Magrib" adhan_time={prayers['magrib']} iqamah_time={prayers['magrib_jamat']} />
        <PrayerBox nextPrayer={prayerNames[prayerNameCounter]} name="Isha" adhan_time={prayers['isha']} iqamah_time={prayers['isha_jamat']} />
      </div>
      <p className="footer">Times are based on London Central Mosque</p>
    </div>
  );
}

export default LeftScreen