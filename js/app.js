// donot show api key for public and js file

const API_KEY = `f2511b8eaf8e1dfacdd1c06bf5e25f69`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const displayTemperature = (data) =>{
    console.log(data.weather[0].main)
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp

    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
}

// set-------

const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}


document.getElementById('btn-search').addEventListener('click', function(){

    const searchField = document.getElementById('search-field')
    const city = searchField.value ;
    document.getElementById('city').innerText = city ;
    loadTemperature(city)
})

loadTemperature('dhaka')