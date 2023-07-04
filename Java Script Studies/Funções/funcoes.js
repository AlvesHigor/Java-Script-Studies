function presente(dinheiro, valor){
    if (dinheiro<valor){
        return "Dinheiro insuficiente"
    }else{
        return "Você realmente precisa realizar essa compra?"
    }
}
let x = presente(100,90)
console.log(x)