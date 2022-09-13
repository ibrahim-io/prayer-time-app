
const RightScreen = ({engHadith, arabicHadith, counter, setCounter}) => {
  let engStyle = {
    'fontSize': '1.2em'
  }
  let arStyle = {
    'fontSize': '1.5em'
  }
  if ((engHadith[counter].En_Sanad + engHadith[counter].En_Text).length > 1000) {
    setCounter(counter+1)
  } else if ((engHadith[counter].En_Sanad + engHadith[counter].En_Text).length > 740) {
    engStyle['fontSize'] = '1.05em'
  }
  if ((arabicHadith[counter].Ar_Sanad_1 + arabicHadith[counter].Ar_Text).length > 1400) {
    arStyle['fontSize'] = '1.25em'
  } else if ((arabicHadith[counter].Ar_Sanad_1 + arabicHadith[counter].Ar_Text).length > 600) {
    arStyle['fontSize'] = '1.3em'
  }
  return (
    <div className="rightScreen">
      <h1 className="rightHeader">Hadith & Announcements</h1>
      <div className="hadithContainer">
        <div className="engHadith" style={engStyle}>
          <p>{engHadith[counter].En_Sanad}</p>
          <p>{engHadith[counter].En_Text}</p>
        </div>
        <div className="arabicHadith" style={arStyle}>
          <p>
            {arabicHadith[counter].Ar_Sanad_1}
            {arabicHadith[counter].Ar_Text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RightScreen
