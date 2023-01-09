import React, { useState } from 'react'

const api = {
    key: "38514dd0f5735e941fb56d4a952fd4d4",
    base: "https://api.openweathermap.org/data/2.5/",
}


function Hero() {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let d = new Date()
    const hours = d.getHours();
    const minutes = d.getMinutes();

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = event => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                })
        }
    }

    return (
        <div className='hidden md:block'>
            <main className='h-screen flex'>
                <div
                    className={(typeof (weather.main) != "undefined") ?
                        (
                            (weather.main.temp > 16) ?
                                ('bg-black w-full h-full bg-cover app flex items-end justify-between hot') :
                                ('bg-black w-full h-full bg-cover app flex items-end  justify-between cold')
                        ) : 'bg-black w-full h-full bg-cover app flex items-end justify-between default'}

                // className={(weather.weather[0].main == "cloudy") ? ("bg-black w-4/6 h-full bg-cover app flex items-end cloudy") : ("bg-black w-4/6 h-full bg-cover app flex items-end hot")}
                >

                    {
                        (typeof (weather.main) != "undefined") ? (
                            <div className='text-white flex items-end pl-14 pb-14'>

                                <h1 className='text-8xl font-semibold'>{Math.round(weather.main.temp)}°C</h1>
                                <div className='px-4'>
                                    <h1 className='text-5xl pb-1'>{weather.name}, {weather.sys.country}</h1>
                                    <h2>{hours}:{minutes} - {days[d.getDay()]}, {months[d.getMonth()]} {d.getFullYear()}</h2>
                                </div>
                                <div className='w-16 flex  items-center flex-col'>
                                    <img src={weather.weather[0].main === "Clear"
                                        ? "https://cdn-icons-png.flaticon.com/512/2613/2613938.png"
                                        : weather.weather[0].main === "Clouds" || weather.weather[0].main === "Fog"
                                            ? "https://cdn-icons-png.flaticon.com/512/3208/3208752.png"
                                            : weather.weather[0].main === "Rainy"
                                                ? "https://cdn-icons-png.flaticon.com/512/2044/2044005.png"
                                                : weather.weather[0].main === "Snow"
                                                    ? "https://cdn-icons-png.flaticon.com/512/2336/2336319.png"
                                                    : weather.weather[0].main === "Rain" ||
                                                        weather.weather[0].main === "Shower rain"
                                                        ? "https://cdn-icons-png.flaticon.com/512/4088/4088981.png"
                                                        : weather.weather[0].main === "Mist"
                                                            ? "https://cdn-icons-png.flaticon.com/512/4005/4005817.png"
                                                            : weather.weather[0].main === "Thunderstorm"
                                                                ? "https://cdn-icons-png.flaticon.com/512/1959/1959321.png"
                                                                : ""} />
                                    <h1 className='text-xl text-white'>{weather.weather[0].main}</h1>
                                </div>
                            </div>
                        ) : (
                            <div className='text-white flex items-end pl-14 pb-14'>
                                {/* <h1 className='text-2xl font-semibold'>Search for a city</h1> */}
                                {
                                    (weather.message) == "city not found" ?
                                        <h1 className='text-2xl'>No city found!</h1> :
                                        <div>
                                            <h1 className='text-3xl text-white font-bold text-left'>Météo Weather App</h1>
                                            <h2>Developed by <a href='https://www.delb.in'>Delbin George</a></h2>
                                            <h3 className='text-sm'>API used <a href='https://openweathermap.org/api'>OpenWeatherMap</a></h3>
                                        </div>
                                }
                            </div>
                        )
                    }
                    <div className='w-2/6 h-full bg-[#080e1196] shadow-xl'>
                        <div className='px-8 pt-8'>
                            <h1 className='text-3xl text-white font-bold py-8 text-left'>Météo Weather App</h1>
                            <input
                                type='text'
                                className='w-full bg-transparent border-b-2 border-grey-100 capitalize outline-none border-slate-500 outline- text-xl text-gray-300 placeholder:text-xl py-2 placeholder:border-slate-500'
                                onChange={e => setQuery(e.target.value)}
                                onKeyDown={search}
                                value={query}
                                placeholder='enter city name here' />
                            <div className='text-slate-400 pt-12'>
                                <h1 className=''>
                                    Suggested Locations:
                                </h1>
                                <div className='pt-4 flex justify-between'>
                                    <button
                                        type='button'
                                        className='bg-gray-900 px-8 text-center py-2 rounded-md'
                                        value='Rose'
                                        onClick=
                                        {
                                            event => {
                                                setQuery(event.target.value)
                                            }
                                        }
                                    >Rose
                                    </button>
                                    <button
                                        type='button'
                                        className='bg-gray-900 text-center px-8 py-2 rounded-md'
                                        value='Kerala'
                                        onClick=
                                        {
                                            event => {
                                                setQuery(event.target.value)
                                            }
                                        }
                                    >Kerala
                                    </button>
                                    <button
                                        type='button'
                                        className='bg-gray-900 text-center px-8 py-2 rounded-md'
                                        value='Iceland'
                                        onClick=
                                        {
                                            event => {
                                                setQuery(event.target.value)
                                            }
                                        }
                                    >Iceland
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Hero