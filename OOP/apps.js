//hocam bildiğin oop ama java kadar gelişmiş değil

class Person
{
    constructor(name,surname,age)
    {
        this.name=name
        this.surname=surname
        this.age=age
    }
    static eyesNumber=2
    static info()
    {
        console.log("homo sapiens")
    }
    get()
    {
        console.log(this.name,this.surname,this.age,this.eyesNumber)
    }
    setAge(number)
    {
        this.age+=number
    }
}
let person1= new Person("hasan","sabbah",102)
person1.get()//hocam dikkat edersen get metodundan sttsic attributa erişemedim
//çünkü metoda obje ile erişiyorum ancak statiğe class ile erişmeliyim
//javada obje ile static value ya erişebilrim ama js de olmaz
person1.setAge(88)
person1.get()
Person.info()


class Student extends Person
{
    constructor(name,surname,age,stdNumber, dep)
    {
        super(name,surname,age)
        this.stdNumber=stdNumber
        this.dep=dep
    }
}//multiple constructerda yok işte azcık ooop var  :))

let std1=new Student("hasan","sabbah",102,12,"işletme :)")
std1.get()
console.log(std1.surname)