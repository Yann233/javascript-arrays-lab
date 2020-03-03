var kittens = ["Milo", "Otis", "Garfield"];//define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
kittens.push(name);//appends a kitten to the end of the kittens array
}

function destructivelyPrependKitten(name){
kittens.unshift(name);//prepends a kitten to the beginning of the kittens array
}

function destructivelyRemoveLastKitten(){
  kittens.pop();//removes the last kitten from the kittens array
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name);//removes the First kitten from the kittens array
}

function appendKitten(name){
  //appends a kitten to the kittens array and returns a new array,
  //leaving the kittens array unchanged
return [...kittens,name];
}

function prependKitten(name){
  //prepends a kitten to the kittens array and returns a new array,
  //leaving the kittens array unchanged
  return [name,...kittens]
}

function removeLastKitten(){
  //emoves the last kitten in the kittens array and returns a new array,
  //leaving the kittens array unchanged
return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  //removes the first kitten from the kittens array and returns a new array,
  //leaving the kittens array unchanged
return kittens.slice(1);
}
