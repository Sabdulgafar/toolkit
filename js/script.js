function HideComponent(){
    document.getElementById('home').style.display="block";
    document.getElementById('calculator').style.display="none";
    document.getElementById('weather').style.display="none";
    document.getElementById('converter').style.display="none";
    document.getElementById('todo').style.display="none";
}
function myFunction(x) {
    x.classList.toggle("change");
}

// the code for calculator program
function Display(x){
    // alert(x);
    document.getElementById('calc-textarea').value+=x;
    // var textvalue=document.getElementById('calc-textarea').value;
    // alert(textvalue);
}
function clearDisplay(){
    document.getElementById('calc-textarea').value="";
}
function solveDisplay(){
    let results=document.getElementById('calc-textarea').value;
    let solvedResults=eval(results);
    document.getElementById('output').value=solvedResults;
}
// code for weather app
let inputval, btn, city, descript, temp, wind;
inputval=document.querySelector('#country-name');
btn=document.querySelector('#check');
city=document.querySelector('#placename');
descript=document.querySelector('#SkyConditionData');
temp=document.querySelector('#TemperatureData');
wind=document.querySelector('#WindSpeedData');

apik = "3045dd712ffe6e702e3245525ac7fa38";
function convertion(val){
    return(val - 273).toFixed(2);
}
btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik).then(res=> res.json())
    .then(data=>{
        let namevalue = data['name']
        let description=data['weather']['0']['description']
        let temperature = data['main']['temp']
        let wndspd = data['wind']['speed']
        city.innerHTML=`Weather in <span>$[namevalue]</span>`
        temp.innerHTML=`<span>$[convertion(temperature)]</span>`
        descript.innerHTML='<span>$[description]</span>'
        wind.innerHTML='<span>$[wndspd] km/h</span>'

    })
    .catch(err => alert('You entered wrong city name'))
})

// code for sectional display
function ShowHome(){
    document.getElementById('home').style.display="block";
    document.getElementById('calculator').style.display="none";
    document.getElementById('weather').style.display="none";
    document.getElementById('converter').style.display="none";
    document.getElementById('todo').style.display="none";
}
function ShowCalculator(){
    document.getElementById('home').style.display="none";
    document.getElementById('calculator').style.display="block";
    document.getElementById('weather').style.display="none";
    document.getElementById('converter').style.display="none";
    document.getElementById('todo').style.display="none";
}
function ShowWeather(){
    document.getElementById('home').style.display="none";
    document.getElementById('calculator').style.display="none";
    document.getElementById('weather').style.display="block";
    document.getElementById('converter').style.display="none";
    document.getElementById('todo').style.display="none";
}
function ShowConverter(){
    document.getElementById('home').style.display="none";
    document.getElementById('calculator').style.display="none";
    document.getElementById('weather').style.display="none";
    document.getElementById('converter').style.display="block";
    document.getElementById('todo').style.display="none";
}
function ShowTodo(){
    document.getElementById('home').style.display="none";
    document.getElementById('calculator').style.display="none";
    document.getElementById('weather').style.display="none";
    document.getElementById('converter').style.display="none";
    document.getElementById('todo').style.display="block";
}