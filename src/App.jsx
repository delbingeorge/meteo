import './App.css'
import Hero from './assets/Hero/Hero'
import Search from './assets/Search/Search'

function App() {

  return (
    <div className="font-poppy">
      <div className='md:hidden h-screen flex items-center justify-center flex-col cold bg-cover text-white '>
        <h1>Sorry, No Mobile View Available</h1>
        <h1>Try opening in your system</h1>
      </div>
      <Hero />
    </div>
  )
}

export default App
