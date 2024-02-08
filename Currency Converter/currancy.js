class Currancy{
    constructor()
    {
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JCLa7HUtVkFGfPnCqEs2ALeqZEenRF1zTDKAfnUC&base_currency="
    }
    async exchange(amount, firstSected, secondSelected)
    {
        const data=await(await fetch(`${this.url}${firstSected}`)).json()
        const result=amount*data.data[secondSelected]
        return result
    }
}