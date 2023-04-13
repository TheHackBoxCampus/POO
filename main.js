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
        this.attr = [color, dimension, borrador, material, marca]
    }
    getElementsDom(){
        let data = {}
        document.querySelector('form').addEventListener('submit', e => {
            e.preventDefault()
            data = Object.fromEntries(new FormData(e.target))
            return data
       })        
    }
    AddElementTable() {
        let dataForm = this.getElementsDom()
        console.log(dataForm)
    }
}
let obj = new lapiz({});

