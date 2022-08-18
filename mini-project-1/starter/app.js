//Perbedaan Var dan Let

//hoisting

// console.log(foo);

// let name = 'wegodev';

// var foo = 'bar';

//scope

// for (let i = 0; i < 3; i++) {
//   console.log('hello ' + i);
// }

// console.log(i);

function foo() {
  let fooVar = 'bar';

  console.log('di dalam func ' + fooVar);

  return fooVar;
}

foo();

console.log(fooVar);

const projectTitle = document.querySelector('.project-title');

projectTitle.textContent = 'Title baru dari JS file';
