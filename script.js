let baseurl = 'https://open.er-api.com/v6/latest/'

let amount = document.getElementById('amount')
let from = document.getElementById('from')
let to = document.getElementById('to')
let result = document.getElementById('result')

function getRates() {
    from = document.getElementById('from')
    url = baseurl + from.value
    return fetch(url)
    .then((data) => data.json())
    .then((json) => json.rates)
}

function getResult() {
    getRates().then(() => {
        amount.addEventListener('input', display)
        from.addEventListener('change', display)
        to.addEventListener('change', display)
    })
}

function display() {
    getRates().then((rates) => {
        from = document.getElementById('from')
        to = document.getElementById('to')
        amount = document.getElementById('amount')
        converted = Number(amount.value) * rates[to.value]
        if (amount.value != ''){
            result.innerHTML = Number(amount.value).toLocaleString() + ' ' + from.value 
            + ' is ' + Number(converted.toFixed(2)).toLocaleString() + ' ' + to.value
        }
       
    })
}

getResult()