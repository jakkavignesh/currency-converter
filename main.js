console.log("main.js working");

const populate = async (base, value) => {
    let myStr = ""
    let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_3HmiSTwo69Z7xdZuQ2fv29kYCCb20rkHMxnE7psi&base_currency=`+base;
    let response = await fetch(url);
    let rjson = await response.json();
    console.log(rjson);

    document.querySelector(".output").style.display = "block";
    
    const tableHead = document.querySelector("thead");
    tableHead.innerHTML = `
    <tr>
        <th>Currency</th>
        <th>Currency Code</th>
        <th>Value</th>
    </tr>
    `
    for (let key of Object.keys(rjson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rjson["data"][key]["code"]}</td>
                        <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}


const btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Button is clicked");
    const value = parseInt(document.getElementById('value').value);
    const base = document.getElementById('base').value;
    populate(base, value);
})