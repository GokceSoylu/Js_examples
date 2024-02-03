class Customer extends Migros
{
    constructor(name,surname,products,haveCard)
    {
        super(name,surname,products,haveCard)
    }
    //hoca birde hesapla metodu eklemiş ama gerek yok bence direkt migrostan kullanamz mı
    calculate(discountCoupon)
    {
        return super.calculate(discountCoupon)
    }
}