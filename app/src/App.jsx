import './App.css'
import { AppRouter } from './components/AppRouter/AppRouter'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { SlideShow } from './components/Hero/Hero'
import { News } from './components/News/News'

function App() {


  return (
    <>
    <Header></Header>
    <SlideShow/>
    <AppRouter></AppRouter>
    </>
  )
}

export default App
