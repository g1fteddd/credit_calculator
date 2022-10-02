import * as Model from "./model.js"
import programs from "./view/radioPrograms.js"

window.onload = function () {
    const getData = Model.getData


    programs(getData)

    document.addEventListener('updateForm', (event) => {
        console.log("FIRRRRREEEED!!!!")
        console.log(event.detail)


        Model.setData(event.detail)
    })


}