import { priceFormater, priceFormaterDecimals } from './../utils/formatters.js'


function updateResultsView(results) {
    document.querySelector("#total-percent").textContent = `${results.rate * 100}%`
    document.querySelector('#total-month-payment').textContent = priceFormaterDecimals.format(results.monthPayment)
    document.querySelector('#total-cost').textContent = priceFormater.format(results.totalAmount)
    document.querySelector('#total-overpayment').textContent = priceFormaterDecimals.format(results.overPayment)
}

export default updateResultsView