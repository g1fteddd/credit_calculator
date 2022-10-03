import updateModel from "../utils/updateModel.js";



function init(getData) {

  const input = document.querySelector("#input-downpayment");

  const cleaveInput = new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " "
  });
  cleaveInput.setRawValue(getData().payment)


  input.addEventListener('input', () => {
    const value = +cleaveInput.getRawValue()
    
    if (value < getData().getMinPayment() || value > getData().getMaxPayment()) {
        input.closest('.param__details').classList.add('param__details--error')
    } else {
        input.closest('.param__details').classList.remove('param__details--error')
    }

    updateModel(input, {
        payment: value,
        onUpdate: 'inputPayment'
    })

  })

  input.addEventListener('change', () => {
    const value = +cleaveInput.getRawValue()

    if (value < getData().getMinPayment()) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(getData().getMinPayment())
    }

    if (value > getData().getMaxPayment()) {
        input.closest('.param__details').classList.remove('param__details--error')
        cleaveInput.setRawValue(getData().getMaxPayment())
    }

    updateModel(input, {
        payment: +cleaveInput.getRawValue(),
        onUpdate: 'inputPayment'
    })
  })

  return cleaveInput
  
}

export default init;
