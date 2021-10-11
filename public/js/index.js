// https://api.rootnet.in/covid19-in/stats/latest
const total = document.getElementById('id1');
const confirmcase =document.getElementById('id2');
const discharged =document.getElementById('id3');
const death =document.getElementById('id4');
const currdate = document.getElementById('id6')


const covidinfo = document.getElementById('covid');

const getInfo = async(event)=>{
    event.preventDefault();
    try {
        let url = 'https://api.rootnet.in/covid19-in/stats/latest';
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
    console.log(arrData[0].data.summary)
    total.innerText = `${arrData[0].data.summary.total}`
    confirmcase.innerText = `${arrData[0].data.summary.confirmedCasesIndian}`
    discharged.innerText = `${arrData[0].data.summary.discharged}`
    death.innerText = `${arrData[0].data.summary.deaths}`

    
    } catch (error) {
        console.log(`link is not working ${error}`)
    }

  }
covidinfo.addEventListener('click',getInfo)
  // get date 
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    let week = weekday[currentTime.getDay()]
    // console.log(week);
    return week

}
getCurrentDay();
const getCurrentTime = () => {
    var Months = ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"]
    var now = new Date();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hrs = now.getHours();
    var mins = now.getMinutes();
    var peroid = "AM";
    if (hrs > 11) {
        peroid = "PM";
        if (hrs > 12) hrs = hrs - 12;
    }
    if (mins < 10) {
        mins = "0" + mins
    }
    let month_ = Months[month]
    // console.log(month_, date, "|", hrs, ":", mins, peroid);
    return `${date} ${month_} | ${hrs}:${mins} ${peroid}`;
}
getCurrentTime();
currdate.innerHTML = getCurrentDay() + "  |  " + getCurrentTime();
covidinfo.addEventListener('click',getInfo)
