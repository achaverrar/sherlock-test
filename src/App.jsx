import { useState } from 'react'
import { useCustomTranslation } from './hooks/useCustomTranslation'
import { Trans } from "react-i18next";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { getTranslatedPlainText } = useCustomTranslation();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt={getTranslatedPlainText("home.images.vite.alt")} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt={getTranslatedPlainText("home.images.react.alt")} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {getTranslatedPlainText("home.buttons.counter.default", { count })}
        </button>
        <p>
          <Trans i18nKey="home.editCodePrompt" values={{ path: "src/App.jsx" }} components={{code: <code />}} />
        </p>
      </div>
      <p className="read-the-docs">
        {getTranslatedPlainText("home.clickLinksPrompt")}
      </p>
    </>
  )
}

export default App
