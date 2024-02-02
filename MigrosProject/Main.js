let message=`
Migrosa Hoşgeldiniz
Money Kartınınz var mı?`;
const products=[
    {productName:"Süt",producPrice:15},
    {productName:"Çikolata",producPrice:10},
    {productName:"Kahve",producPrice:100}
]

let name_=prompt("isminizi girininz")  
let surname=prompt("soyisminizi giriniz")
let result=confirm(message)

const customer1=new Customer(name_,surname,products)
customer1.have_card(result)
let amount=customer1.calculate()
alert(
        `
        ${customer1.getName()}  ${customer1.getSurname()}
        ödenecek tutar : ${amount}
        `
    )