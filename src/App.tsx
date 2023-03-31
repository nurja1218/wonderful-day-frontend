import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutesForUser } from './routes'
import { GlobalStyle } from './lib/styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesForUser />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </BrowserRouter>
    </>
  )
}

export default App
