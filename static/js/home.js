

const date_url = "http://worldtimeapi.org/api/timezone/";

async function refreshTime() {

    let city = document.getElementById("city").value;

    if(city != 'none') {

        document.getElementById('datatime_card').style.display = "block";

        const response = await fetch(date_url + city);
        const data = await response.json();

        const dateTimeInParts = data.datetime.split("T");

        const arr1 = dateTimeInParts[0].split("-");
        // console.log(arr1);

        const arr2 = dateTimeInParts[1].split(":");
        // console.log(arr2);

        var h = arr2[0] % 12;
        var hour =  h < 10 ? '0'+h : h;

        var second = arr2[2].split(".");
        var zone = arr2[0] >= 12 ? 'PM' : 'AM';

        document.getElementById("hour").textContent = hour + ":";
        document.getElementById("min").textContent = arr2[1] + ":";
        document.getElementById("sec").textContent = second[0] + " ";
        document.getElementById("zone").textContent = zone;

        document.getElementById("date").textContent = arr1[2] + "-" + arr1[1] + "-" + arr1[0];

    } else {
        document.getElementById('datatime_card').style.display = "none";
    }

}



setInterval(refreshTime, 1000);



const zone_url = "http://worldtimeapi.org/api/timezone";

async function zone() {

    const response = await fetch(zone_url);
    const data = await response.json();

    let select = document.getElementById("city");
    for (let i = 0; i < data.length; i++) {
        let optn = data[i];
        let el = document.createElement("option");

        let txt = data[i].split("/")
        el.textContent = txt[1];

        el.value = optn;
        select.appendChild(el);
    }

}

zone()



function Time() {
    // refreshTime()
    setInterval(refreshTime, 1000);
}
