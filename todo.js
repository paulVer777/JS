// const todo = ['js', 'react', 'html', 'css3', 'nodejs']

const todoAdv = [{
    title: 'js',
    body: 'learn js',
    completed:true
  },
  {
    title: 'react',
    body: 'learn react',
    completed:false
  },
  {
    title: 'nodejs',
    body: 'learn node',
    completed:false
  },
  {
    title: 'json',
    body: 'learn json',
    completed:true
  }
]



// let pushUpgrade = (arr, content) => {
//     arr.push(content)
//     console.log(arr)
// }


// pushUpgrade(todo,'Ajax');

// popUpgrade= arr => {
//  let returnetValue=arr.pop();
// console.log(returnetValue);
// }

// popUpgrade(todo);

// todo.splice(0, 1, 'jQuery'); // im starting from 0 index, remove value from it and add new value which is 'jQuery'

// todo.splice(3,1);
// console.log(todo);
// todo.push('new');
// console.log(todo.indexOf('nodejs'));
// let firstItem=todo.shift();
// console.log(firstItem);
// console.log(todo)

// todo.splice(todo.length,0,'great')

// console.log(todo);

// todo.forEach((value, index) => console.log(` ${index + 1}. ${value} `))

//map

// let loopFunction = (arr) => {

//     let newTab = [];

//     for (let i = 0; i < arr.length; i++) {

//       arr[i].length < 5 ? newTab.push(arr[i]) : ""
//     }
//     return newTab; 
// }

// loopFunction(todo).forEach((value,index)=> console.log(value))

//map with revert iterating

// let loopFunction = (arr) => {

//   let newTab = [];

//   for (let i = arr.length - 1; i >= 0; i--) {

//     arr[i].length < 5 ? newTab.push(arr[i]) : ""
//   }
//   return newTab;

// }

// console.log(loopFunction(todo))

// let test=todo.indexOf('html');


// const dsV = (arr, val) => {

//   return arr.find((value, index) => {

//     return value.title.toLowerCase() === val.toLowerCase()

//   })
// }



// console.log(dsV(todoAdv,'Jss'))





// let box='ggkotgg'.includes('kot')

// console.log(box);


// const finder=((arr, element)=>{


// const ind=arr.findIndex((value,index)=>{

// return value.title.toLowerCase() === element.toLowerCase();

// })

// return todoAdv[ind]

// })

// const show=finder(todoAdv,'React')

// console.log(show)


//function that deletes defined items from array

// deleteItem = (arr, whatToDel) => {

//   const item = arr.findIndex((value, index) => {

//     return value.title.toLowerCase() === whatToDel.toLowerCase();

//   })
//   item > 0 ? arr.splice(item, 1, 'completed') : console.log('match havent found')
// }

// deleteItem(todoAdv, 'react')
// console.log(todoAdv);

// console.log(todoAdv);

/////////////////////////////////////////////////////////////

// const tablica = ['s', 'f', 'g', 'j']
// const letter = tablica.splice(-1, 1)



// const tablica2=tablica.slice(0,2)

// console.log(tablica2);


// console.log(letter);


//function for filtering arrays

// const filterUpgraded = (arr, desiredElement) => {
   
//   return arr.filter((value, index) => {
//     const title1 = value.title.toLowerCase().includes(desiredElement.toLowerCase())
//     const body1 = value.body.toLowerCase().includes(desiredElement.toLowerCase())

//     return title1 || body1
//   })
// }

// const tabliczka=filterUpgraded(todoAdv,'js')

// // console.log(tabliczka);


// const showTodos = (arr,desiredElement)=>{

//  return arr.filter((value,index)=>{

//    return value.completed===desiredElement


//  })

// }

// console.log(showTodos(todoAdv,false));



//sorting function

const sortingFunction = arr =>{

 arr.sort((a,b) => {

    if(!a.completed) return -1
    else if(!b.completed) return 1
    else return 0

  //  if(a.title < b.title) return -1
  //  else if (b.title < a.title) return 1
  //  else return 0 


 })
}

sortingFunction(todoAdv)

console.log(todoAdv);

