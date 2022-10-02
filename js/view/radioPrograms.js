function init(getData) {
    
    const radioBtns = document.querySelectorAll('input[name="program"]')
    const { base, it, gov, zero } = getData().programs
    
    document.querySelector('#base-value').value = base
    document.querySelector('#it-value').value = it
    document.querySelector('#gov-value').value = gov
    document.querySelector('#zero-value').value = zero

    document.querySelector('#base-text').textContent = `${base * 100}%`
    document.querySelector('#it-text').textContent = `${it * 100}%`
    document.querySelector('#gov-text').textContent = `${gov * 100}%`
    document.querySelector('#zero-text').textContent = `${zero * 100}%`


    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('change', (event) => {
            console.log(event.target);
            console.log(parseFloat(event.target.value))
            console.log(event.target.id)

            radioBtn.dispatchEvent(new CustomEvent('updateForm', {
                bubbles: true,
                detail: {
                    selectedProgram: parseFloat(event.target.value),
                    onUpdate: 'radioProgram',
                    id: event.target.id
                }
            }))


        })
    });
}

export default init