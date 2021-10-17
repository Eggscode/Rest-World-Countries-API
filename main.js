const countries = document.querySelector('.countries');
// const search = document.querySelector('fa-search').addEventListener
// ('click', getCountry);
let mode = document.querySelector('.fa-sun-o');
const toggle = document.getElementById('mode');

// Toggle Dark-Mode ---------------

toggle.addEventListener('click',()=>{
    if(mode.className === 'fa fa-sun-o'){
        mode.className = 'fa fa-moon-o';
        document.getElementById('mode-text').innerText = 'Dark Mode';
    }
    else{
        mode.className = 'fa fa-sun-o';
        document.getElementById('mode-text').innerText = 'Light Mode';
    }
})

// All countries---------------------

function getCountries(){
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) =>{
        let output = ''
        data.forEach(function(country){
            let flag = country.cca2.toLowerCase()
            output += `
            <div class="country">
                <img src= 'https://flagcdn.com/w320/${flag}.png' alt="flag">
                <div class="description">
                <h3>${country.name.common}</h3>
                <li><span>Population:</span> ${country.population}</li>
                <li><span>Region:</span> ${country.region}</li>
                <li><span>Capital:</span> ${country.capital}</li>
            </div>
            </div>
            ` 
        });
            countries.innerHTML = output 
  
    })
    .catch((err) => console.log(err))
}

// To filter Regions-------------------------

function getValue(){
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) =>{
        let value = document.getElementById("regions").value;
        let output = ''
        const filteredRegion = data.filter((country) => {
           if(country.region === value)
           return true
        });
        filteredRegion.forEach(function(country){
            let flag = country.cca2.toLowerCase()
            output += `
            <div class="country">
                <img src= 'https://flagcdn.com/w320/${flag}.png' alt="flag">
                <div class="description">
                <h3>${country.name.common}</h3>
                <li><span>Population:</span> ${country.population}</li>
                <li><span>Region:</span> ${country.region}</li>
                <li><span>Capital:</span> ${country.capital}</li>
            </div>
            </div>
            ` 
        });
            countries.innerHTML = output;
    })
    .catch((err) => console.log(err))}



   
// function getCountry(){
//     fetch('')
//     .then((res)=> res.json())
//     .then((data)=> {
//         let output = '';
//         data.forEach(function(country){
//             output += `
//             <img src=${country.flags[1]}alt="">
//                 <div class="profile">
//                     <h3>${country.name}</h3>
//                     <div class="path">a
//                         <div class="left">
//                             <li><span>Native Name:</span> ${country.nativeName}</li>
//                             <li><span>Population:</span> ${country.population}</li>
//                             <li><span>Region:</span> ${country.region}</li>
//                             <li><span>Sub Region:</span> ${country.subregion}</li>
//                             <li><span>Capital:</span> ${country.capital}</li>
//                         </div>
//                         <div class="right">
//                             <li><span>Top Level Domain:</span> be</li>
//                             <li><span>Currencies:</span> ${country.currencies[0].name}</li>
//                             // <li><span>Languages:</span> </li>
//                         </div>
//                     </div>
//                     <div class="b-count">
//                         <span>Border Countries:</span>
//                     </div>
//             </div>
//             `;
//         });
//         countries.innerHTML = data;
//     });
// }
