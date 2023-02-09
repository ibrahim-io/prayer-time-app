
const RightScreen = () => {
  let engStyle = {
    'fontSize': '1.2em'
  }
  let arStyle = {
    'fontSize': '1.5em'
  }
  
  return (
    <div className="rightScreen">
      <h1 className="rightHeader">Hadith & Announcements</h1>
      <div className="hadithContainer">
        <div className="engHadith" style={engStyle}>
          <p>Jarir bin Abdullah narrated that the Messenger of Allah said: "Whoever does not show mercy to the people, Allah will not show mercy to him."</p>
        </div>
        <div className="arabicHadith" style={arStyle}>
          <p>
            حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنْ إِسْمَاعِيلَ بْنِ أَبِي خَالِدٍ، حَدَّثَنَا قَيْسُ بْنُ أَبِي حَازِمٍ، حَدَّثَنَا جَرِيرُ بْنُ عَبْدِ اللَّهِ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ "‏ مَنْ لاَ يَرْحَمُ النَّاسَ لاَ يَرْحَمُهُ اللَّهُ ‏"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ قَالَ وَفِي الْبَابِ عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ وَأَبِي سَعِيدٍ وَابْنِ عُمَرَ وَأَبِي هُرَيْرَةَ وَعَبْدِ اللَّهِ بْنِ عَمْرٍو
          </p>
        </div>
      </div>
    </div>
  )
}

export default RightScreen
