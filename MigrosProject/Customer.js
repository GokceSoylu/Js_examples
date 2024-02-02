class Customer extends Migros
{
    constructor(name,surname,products,haveCard)
    {
        super(name,surname,products,haveCard)
    }
    //hoca birde hesapla metodu eklemiş ama gerek yok bence direkt migrostan kullanamz mı
    calculate()
    {
        let discountCoupon=0
        if(confirm("ek indirminiz var mı?"))
            discountCoupon=prompt("indirim miktarı")
        super.sale+=discountCoupon
        super.calculate()
    }
}