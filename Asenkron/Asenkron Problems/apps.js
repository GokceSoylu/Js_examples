//öncelikle içinde asenkron metod olan funciton da asenkron çalışır


function getName(callback)
{
    setTimeout(()=>
    {
        let name="Hasan"
        callback(name)
    },1000)
}
function getSurname(name)
{
    setTimeout(()=>
    {
        let surname="sabbah"
        console.log(name, surname)
    },5000)
}

getName(getSurname)

//normalde callback muhabbeti olmadan sırayla getName() ve getSurname()
//metodlarını çalıştırdığımızda asenkron oldukalrı için aynı anad çalımaya 
//başlarlar e önce surname biter sonra name sonuç olarka surnam name şeklinde yazdırılır
// bu sorunu çözmek için callback kullanılır buda bir metoda paremetre olarak
//başka bir metodu vererek olur
//burada parametre adı olarak callback demek zorunda değiliz istersen mahmut de
//sorun değil anlaşılsın diye callback dedik
//görüldüğü üzere daha sonra da callback() diyerek bir metod içerisinde başka
//bir metodu çağırarak sırayı istediğimiz hala getirdik. bu asenkron bi kdou
//senkron halıne getirmek oluyo. önce bu daha sonra şu çalışsın dedik.
//paremetre olarak name vermenin olayla alakası yokkm tamamen hava olsun diye yaptık :))