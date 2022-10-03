function updateMinPercents(data) {
    document.querySelector('#percents-from').textContent = `${data.minPaymentPercents * 100}%`
}

export { updateMinPercents }