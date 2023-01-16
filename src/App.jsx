import './App.css'
import Hero from './assets/Hero/Hero'
import Search from './assets/Search/Search'

function App() {

  return (
    <div className="font-poppy overflow-hidden">
      <div className='md:hidden h-screen flex items-center justify-center flex-col cold bg-cover text-white '>
        <Search />
      </div>
      {/* <Search className="md:hidden" /> */}
      <Hero className="" />
    </div>
  )
}

export default App
