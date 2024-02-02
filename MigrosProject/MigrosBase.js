class Migros
{
    sale=0.8
    constructor(name, surname, products)
    {
        this.name=name
        this.surname=surname
        this.products=products
    }
    have_card(haveCard)
    {
        this.haveCard=haveCard
    }

    calculate()
    {
        if(this.checkProduct)
        {
            let amount=0
            if(this.haveCard)
                this.products.forEach(product =>amount+=product*this.sale)
            else
                this.products.forEach(product =>amount+=product)
            return amount
        }
        else
            alert("ürün seçmelisiniz")
    }
    checkProduct()
    {
        if(this.products==null || this.products.length<=0) return false
        else return true
    }
    getName()
    {
        console.log(this.name)
        return this.name
    }
    getSurname()
    {
        console.log(this.surname)
        return this.surname
    }
}
