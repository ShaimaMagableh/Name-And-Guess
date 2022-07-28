import { getNameinput,getCountires} from "./local storage.js";
const guessName =document.getElementById("guessName");
const name=document.getElementById("name");
const genderType=document.getElementsByClassName("genderType")[0];
const Age =document.getElementsByClassName("age")[0];
const country=document.getElementsByClassName("country")[0];

// document.getElementById("Btn").onclick = displayDate;
guessName.addEventListener('submit', async function(e) {
    e.preventDefault();
    const {
        gender,nationality,age
    }=await getNameinput(name.value)
    console.log(gender,nationality,age)
    genderType.textContent=gender.gender;
    Age.textContent=age.age;
    console.log(name.value)
const countries =await getCountires(nationality.country)

country.innerHTML=countries.countries;
console.log(countries.nationality)


})
name.addEventListener("keyup",function(evt){
    let {value}=evt.target;
    value=value.replace(/[^a-z]/gi,'');
    evt.target.value=value;
});


    



