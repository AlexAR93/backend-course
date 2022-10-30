const fs=require('fs');
class Contenedor {
    constructor(ruta) {
        this.produdcts=[]
        this.ruta=ruta
    }

    async save(newArray){
        this.produdcts.push(newArray)
        await fs.promises.writeFile(this.ruta, JSON.stringify(this.produdcts))
    }
    async getById(id){
        this.produdcts=JSON.parse(await fs.promises.readFile(this.ruta,'utf-8'))
        return this.produdcts.find(p=>p.id==id)
    }
    async getAll(){
        this.produdcts=JSON.parse(await fs.promises.readFile(this.ruta,'utf-8'))
        return this.produdcts
    }
    async deleteById(id){
        // Elimina el objeto con el id buscado
        let index=this.produdcts.findIndex(p=>p.id==id)
        this.produdcts.splice(index,1)
        await fs.promises.writeFile(this.ruta, JSON.stringify(this.produdcts))
        return this.produdcts
    }
    async deleteAll(){
        // Elimina todos los objetos presente
        this.produdcts.splice(0)
        await fs.promises.writeFile(this.ruta, JSON.stringify(this.produdcts))
        return this.produdcts
    }
  }





const newArray={
    id:1,
    title:'Mouse',
    price:3500,
    thumbnail:'https://...'
};
const newArray1={
    id:2,
    title:'Teclado',
    price:5500,
    thumbnail:'https://...'
};
const newArray2={
    id:3,
    title:'Monitor',
    price:55500,
    thumbnail:'https://...'
};
const newArray4={
    id:4,
    title:'Grafica',
    price:135500,
    thumbnail:'https://...'
};


const createFS=async()=>{
    const ruta='./products.txt'
    const produdctsContainer=new Contenedor(ruta)
    await produdctsContainer.save(newArray)
    await produdctsContainer.save(newArray2)
    await produdctsContainer.save(newArray1)
    await produdctsContainer.getById(1)
    await produdctsContainer.deleteById(1)
    await produdctsContainer.deleteAll()
    await produdctsContainer.deleteById(1)
    await produdctsContainer.getById(1)
    await produdctsContainer.save(newArray1)
    await produdctsContainer.save(newArray2)
    await produdctsContainer.deleteAll()
    await produdctsContainer.save(newArray1)
    
}
createFS()