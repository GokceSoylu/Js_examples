let message=`
Migrosa Hoşgeldiniz
Money Kartınınz var mı?`;
const products=[
    {productName:"Süt",productPrice:15},
    {productName:"Çikolata",productPrice:10},
    {productName:"Kahve",productPrice:100}
]

let name_=prompt("isminizi girininz")  
let surname=prompt("soyisminizi giriniz")
let result=confirm(message)
let discountCoupon=0
if(confirm("ek indirminiz var mı?"))
   discountCoupon=prompt("indirim miktarı")
const customer1=new Customer(name_,surname,products)
customer1.have_card(result)
let amount=customer1.calculate(discountCoupon)
alert(
        `
        ${customer1.getName()}  ${customer1.getSurname()}
        ödenecek tutar : ${amount}
        `
    )