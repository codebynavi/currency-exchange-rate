
// code for swipe input field data
function swap() {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");

    const temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;

    // swipe value code for input field 

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const tempInput = input1.value;
    input1.value = input2.value;
    input2.value = tempInput;
}

// code for fetching data through api

const apiKey = 'd9f7ed3d7a547dcd248702ed';
const url = 'https://v6.exchangerate-api.com/v6/';

async function checkData(select11, select22) {
    const link = url + apiKey + '/pair/' + select11 + '/' + select22;

    console.log(link);

    fetch(link)
        .then(response => response.json())
        .then(

            data => {
                document.querySelector('#conRate').innerHTML = data.conversion_rate;
                document.querySelector('#input2').value = data.conversion_rate;
                document.querySelector('#input1').value = 1;
                var lastUpdateDate = data.time_last_update_unix * 1000;
                var lastUDate = new Date(Number(lastUpdateDate)).toLocaleString('en-gb', { timeZone: 'Asia/Kolkata', hour12: true });
                document.querySelector('#lastTime').innerHTML = lastUDate;

                var nextUpdateDate = data.time_next_update_unix * 1000;
                var nextUDate = new Date(Number(nextUpdateDate)).toLocaleString('en-gb', { timeZone: 'Asia/Kolkata', hour12: true });
                document.querySelector('#nextTime').innerHTML = nextUDate;
                // console.log(data)
            }


        )
        .catch(error => console.error(error));

}

// code for load data on page load
window.onload = function () {
    const select11 = document.getElementById("select1").value;
    const select22 = document.getElementById("select2").value;
    checkData(select11, select22);

};

// code for get data on click button
document.querySelector('#goBtn').addEventListener('click', () => {
    const select11 = document.getElementById("select1").value;
    const select22 = document.getElementById("select2").value;
    checkData(select11, select22);
});



