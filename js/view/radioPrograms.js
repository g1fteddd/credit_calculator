function init(getData) {
    console.log(getData().programs)

    const { base, it, gov, zero } = getData().programs
    
    document.querySelector('#base-value').value = base
    document.querySelector('#it-value').value = it
    document.querySelector('#gov-value').value = gov
    document.querySelector('#zero-value').value = zero

    document.querySelector('#base-text').textContent = `${base * 100}%`
    document.querySelector('#it-text').textContent = `${it * 100}%`
    document.querySelector('#gov-text').textContent = `${gov * 100}%`
    document.querySelector('#zero-text').textContent = `${zero * 100}%`


}

export default init