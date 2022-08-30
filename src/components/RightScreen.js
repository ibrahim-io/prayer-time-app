
const RightScreen = ({engHadith, arabicHadith, counter}) => {
  return (
    <div className="rightScreen">
      <h1 className="rightHeader">Hadith & Announcements</h1>
      <div className="hadithContainer">
        <div className="engHadith">{engHadith[counter]}</div>
        <div className="arabicHadith">{arabicHadith[counter]}</div>
      </div>
    </div>
  )
}

export default RightScreen
