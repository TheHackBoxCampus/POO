let template = color => dimension => brand => eraser => material => {
    return (`
        <tr>
            <td><input type="color" value=${color}></td>
            <td>${dimension}</td>
            <td>${brand}</td>
            <td>${eraser}</td>
            <td>${material}</td>
        </tr>
    `)
}

class lapiz{
    #marca
    constructor(
    {
        color="Amarillo", 
        dimension=19,
        borrador=true,
        material="Madera",
        marca="mongol"
    })
    {
        this.attr = [color, dimension, marca, borrador, material]
        this.container = document.querySelector('#tbody')
    }

    showDataForDefault(){
        let colorHTLM = document.querySelector('[name=""]')
        let dimensionHTML = document.querySelector('[name="dimension"]')
        let marcaHTML = document.querySelectorAll('[name="marca"]')
        let borradorHTML = document.querySelectorAll('[name="borrador"]')
        let materialHTML = document.querySelectorAll('[name="material"]')
        console.log(marcaHTML)
    }

    updateDatasForDefault(){
       color = this.attr[0]
       dimension = this.attr[1]
       borrador = this.attr[2]
       material = this.attr[3]
       marca = this.attr[4]
    }    

    getElementsDom(){
        let data = {}
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault()
            data = Object.fromEntries(new FormData(e.target))
            this.AddElementTable(data)
        })
    }
    AddElementTable(obj) {
        this.attr = []
        for(let prop in obj) this.attr.push(obj[prop])
        let htmlRender = template(this.attr[0])(this.attr[1])(this.attr[2])(this.attr[3])(this.attr[4])
        this.container.insertAdjacentHTML('beforeend', htmlRender)
    }
}

addEventListener('DOMContentLoaded', () => {
    let obj = new lapiz({})
    obj.showDataForDefault()
    obj.getElementsDom()
})
