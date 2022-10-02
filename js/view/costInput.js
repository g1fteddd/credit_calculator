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
    console.log(value);
    
    if (value < data.minPrice || value > data.maxPrice) {
        input.closest('.param__details').classList.add('param__details--error')
    } else {
        input.closest('.param__details').classList.remove('param__details--error')
    }
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
  })
  
}

export default init;
