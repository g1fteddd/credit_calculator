import updateModel from "../utils/updateModel.js";



function init(getData) {
    const data = getData()
  const input = document.querySelector("#input-term");

  const cleaveInput = new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " "
  });
  cleaveInput.setRawValue(data.time)


  input.addEventListener('input', () => {
    const value = +cleaveInput.getRawValue()
    
    if (value < data.minYear || value > data.maxYear) {
        input.closest('.param__details').classList.add('param__details--error')
    } else {
        input.closest('.param__details').classList.remove('param__details--error')
    }

    updateModel(input, {
        time: value,
        onUpdate: 'inputTime'
    })

  })

  input.addEventListener('change', () => {
    const value = +cleaveInput.getRawValue()

    if (value < data.minYear) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(data.minYear)
    }

    if (value > data.maxYear) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(data.maxYear)
    }

    updateModel(input, {
        time: +cleaveInput.getRawValue(),
        onUpdate: 'inputTime'
    })
  })

  return cleaveInput
  
}

export default init;
