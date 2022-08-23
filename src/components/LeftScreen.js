import PrayerBox from "./PrayerBox"
import Sunrise from "./Sunrise"

const LeftScreen = ({time, prayers}) => {

  return (
    <div className="leftScreen">
      <div className="header">
        <h1>Prayer Times</h1>
      </div>
      <div className="curr_time_box"> 
        <div className="curr_time">{time[1].match(/..:..:../)}</div> 
        <div className="date">{time[0]}</div>
      </div>
      <div className="prayer_container">
        <PrayerBox name="Fajr" adhan_time={prayers['fajr']} iqamah_time={prayers['fajr_jamat']}/>
        <Sunrise time={prayers["sunrise"]}/>
        <PrayerBox name="Dhuhr" adhan_time={prayers['dhuhr']} iqamah_time={prayers['dhuhr_jamat']}/>
        <PrayerBox name="Asr" adhan_time={prayers['asr']} iqamah_time={prayers['asr_jamat']}/>
        <PrayerBox name="Maghrib" adhan_time={prayers['magrib']} iqamah_time={prayers['magrib_jamat']}/>
        <PrayerBox name="Isha" adhan_time={prayers['isha']} iqamah_time={prayers['isha_jamat']}/>
      </div>
      <p className="footer">Times are based on London Central Mosque</p>
    </div> 
  )

}

export default LeftScreen