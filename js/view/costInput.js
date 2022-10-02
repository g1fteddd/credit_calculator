function init(getData) {
  const input = document.querySelector("#input-cost");

  var cleave = new Cleave(input, {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
        delimiter: " "
  });

  console.log(cleave)
}

export default init;
