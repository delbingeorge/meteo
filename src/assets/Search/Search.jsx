import React, { useState } from 'react'

const api = {
    key: "38514dd0f5735e941fb56d4a952fd4d4",
    base: "https://api.openweathermap.org/data/2.5/",
}

function Search() {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = event => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                })
        }
    }

    return (
        <div className={
            (typeof (weather.main) != "undefined") ?
                (
                    (weather.main.temp > 16) ? 'hot' : 'app'
                ) : 'app'
        }>
            <main className='font-poppy w-full flex flex-col items-center justify-center min-h-screen  text-white'>
                <div className='py-3 w-full flex items-center flex-col'>
                    <h1 className='text-4xl font-bold py-8 text-center'>Météo Weather App</h1>
                    <input
                        type='text'
                        className='bg-white-900 w-5/6 rounded-lg border-2 outline-none border-slate-800 outline- text-3xl text-slate-800 text-center placeholder:text-xl p-2 md:w-2/6'
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={search}
                        value={query}
                        placeholder='enter city name here' />
                </div>
                {
                    (typeof (weather.main) != "undefined") ? (

                        <div className='  text-white w-96 h-56 rounded flex items-center justify-center flex-col'>
                            <h1 className='text-2xl'>{weather.name}, {weather.sys.country}</h1>
                            <h1 className='text-6xl font-bold py-4'>{weather.main.temp}°C</h1>
                            <h1 className='text-4xl font-bold'>{weather.weather[0].main}</h1>
                        </div>
                    ) : (
                        <div>
                            {
                                (weather.message == "city not found") ? (
                                    <h1 className='text-3xl font-bold'>City not found</h1>
                                ) : ("")
                            }
                        </div>
                    )}
            </main>
        </div>
    )
}

export default Search
