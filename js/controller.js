import * as Model from "./model.js"
import updateResultsView from "./view/updateResultsView.js"
import programs from "./view/radioPrograms.js"


window.onload = function () {
    const getData = Model.getData


    programs(getData)

    document.addEventListener('updateForm', (event) => {


        Model.setData(event.detail)

        const data = Model.getData()
        const results = Model.getResults()

        updateResultsView(results)
    })


}