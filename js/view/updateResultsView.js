function updateResultsView(results) {
    document.querySelector("#total-percent").textContent = `${results.rate * 100}%`
}

export default updateResultsView