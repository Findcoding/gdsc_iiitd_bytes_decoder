const date_url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

async function refreshTime() {

    const response = await fetch(date_url);
    const data = await response.json();

    console.log(data);

    const dateTimeInParts = data.datetime.split("T");
    console.log(dateTimeInParts)

    const arr1 = dateTimeInParts[0].split("-");
    // console.log(arr1);

    const arr2 = dateTimeInParts[1].split(":");
    // console.log(arr2);

    var second = arr2[2].split(".");

    var zone = arr2[0] >= 12 ? 'PM' : 'AM';

    document.getElementById("hour").textContent = arr2[0] + ":";
    document.getElementById("min").textContent = arr2[1] + ":";
    document.getElementById("sec").textContent = second[0] + " ";
    document.getElementById("zone").textContent = zone;

    document.getElementById("date").textContent = arr1[2] + "-" + arr1[1] + "-" + arr1[0];

}

// refreshTime()

setInterval(refreshTime, 1000);
