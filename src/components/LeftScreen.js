import { useState } from "react";
import PrayerBox from "./PrayerBox"

const LeftScreen = ({ now, prayers }) => {
  const time = now.toLocaleString("en-GB", { timeZone: "Europe/London" }).split(", ");
  //Hijri Calender Date  
  const hijri = new Intl.DateTimeFormat('ar-EN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
  //Logic for the countdown of the next prayer
  const [prayerNameCounter, setPrayerNameCounter] = useState(0)
  const prayerNames = ['fajr' ,'fajr_jamat', 'dhuhr', 'dhuhr_jamat', 'asr', 
                        'asr_jamat', 'maghrib','maghrib_jamat', 'isha', 'isha_jamat']
  const start = time[1].split(':')
  const tiime = prayers[prayerNames[prayerNameCounter]].split(':');
  //I've put in a dummy date below because that doesnt matter to the calculations
  let endDate = new Date(2020, 5, 5, tiime[0] , tiime[1] , 0 );
  let startDate = new Date(2020,5,5, start[0], start[1], start[2])
  let difference = (endDate.getTime() - startDate.getTime()) / 1000;
  //Ensures that we are counting down to the next prayer
  if (difference < 0) {
    setPrayerNameCounter(prayerNameCounter+1)
  }
  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;
  return (
    <div className="leftScreen">
      <div className="curr_time_box"> 
        <div className="header">
          <div className="date">{ time[0] }</div>
          <p className="title">Prayer Times</p>
          <div className="date">{ hijri }</div>
        </div>
        <div className="curr_time">{ time[1] }</div> 
        <p>{prayerNames[prayerNameCounter].toUpperCase()} is in</p>
        <div className="countdown_timer">{hourDifference}:{minuteDifference}:{difference}</div>
      </div>
      <div className="prayer_container">
        <PrayerBox name="Fajr" adhan_time={prayers['fajr']} iqamah_time={prayers['fajr_jamat']}/>
        <PrayerBox name="Sunrise" adhan_time={prayers["sunrise"]} iqamah_time=" --:--"/>
        <PrayerBox name="Dhuhr" adhan_time={prayers['dhuhr']} iqamah_time={prayers['dhuhr_jamat']}/>
        <PrayerBox name="Asr" adhan_time={prayers['asr']} iqamah_time={prayers['asr_jamat']}/>
        <PrayerBox name="Maghrib" adhan_time={prayers['magrib']} iqamah_time={prayers['magrib_jamat']}/>
        <PrayerBox name="Isha" adhan_time={prayers['isha']} iqamah_time={prayers['isha_jamat']}/>
      </div>
      <p className="footer">Times are based on London Central Mosque</p>
    </div> 
  );
}

export default LeftScreen