import Title from "../components/Title"
import Button from "../buttons/Button"
import socialData from "./assets/socialData"

function App() {

  const newButtons = socialData.map(social => {
    return (
      <Button 
        name = {social.name}
        icon = {social.iconName}
        link = {social.link}
        backgroundColor = {social.backgroundColor}
      />
    )
  })
  

  return (
    <div className="mainScreen-card">
      <main className = "mainScreen-content">
        <Title />
        {newButtons}
      </main>
    </div>
  )
}

export default App
