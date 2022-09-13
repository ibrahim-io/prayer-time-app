import PrayerBox from "./PrayerBox"

const LeftScreen = ({ now, prayers }) => {
  const time = now.toLocaleString("en-GB", { timeZone: "Europe/London" }).split(", ");
    
  const hijri = new Intl.DateTimeFormat('ar-EN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
  return (
    <div className="leftScreen">
      <div className="curr_time_box"> 
        <div className="header">
          <div className="date">{ time[0] }</div>
          <p>Prayer Times</p>
          <div className="date">{ hijri }</div>
        </div>
        <div className="curr_time">{ time[1] }</div> 
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