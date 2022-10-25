let quest1= [8,1846]

let quest2= {
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
}

let quest3=[
    {first:'Your name is Alejandro and you like purple' },
    {second: 'Your name is Melissa and you like green'},
    {last:'Your name is and you like green'}
]

let quest4=[{
    first:'maya',
    second:'Marissa',
    third:'Chi'
}]

let quest5=[{
    raindrops:'Raindrops on roses',
    whiskers:'whiskers on kittens',
    aFewOfMyFavoriteThings:[
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
    ]
}]

let quest6=[10,30,20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

const {a,b}=obj.numbers

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let arr=[1,2]
[arr[0],arr[1]] = [arr[1],arr[0]]

let raceResults=(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

let winningResults= ([first,second,third,...rest]) => ({first,second,third,rest})

