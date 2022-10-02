import updateModel from "../utils/updateModel.js";



function init(getData) {
    const data = getData()
  const input = document.querySelector("#input-cost");

  const cleaveInput = new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " "
  });
  cleaveInput.setRawValue(data.cost)


  input.addEventListener('input', () => {
    const value = +cleaveInput.getRawValue()
    
    if (value < data.minPrice || value > data.maxPrice) {
        input.closest('.param__details').classList.add('param__details--error')
    } else {
        input.closest('.param__details').classList.remove('param__details--error')
    }

    updateModel(input, {
        cost: value,
        onUpdate: 'inputCost'
    })

  })

  input.addEventListener('change', () => {
    const value = +cleaveInput.getRawValue()

    if (value < data.minPrice) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(data.minPrice)
    }

    if (value > data.maxPrice) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(data.maxPrice)
    }

    updateModel(input, {
        cost: +cleaveInput.getRawValue(),
        onUpdate: 'inputCost'
    })
  })
  
}

export default init;
