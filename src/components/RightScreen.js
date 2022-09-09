
const RightScreen = ({engHadith, arabicHadith, counter}) => {
  return (
    <div className="rightScreen">
      <h1 className="rightHeader">Hadith & Announcements</h1>
      <div className="hadithContainer">
        <div className="engHadith">
          <p>{engHadith[counter].En_Sanad}</p>
          <p>{engHadith[counter].En_Text}</p>
        </div>
        <div className="arabicHadith">
          <p>{arabicHadith[counter].Ar_Sanad_1}</p>
          <p>{arabicHadith[counter].Ar_Text}</p>
        </div>
      </div>
    </div>
  )
}

export default RightScreen
