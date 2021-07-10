// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
};
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats,]
}
function removeLastCat(){
    const copyCat = cats.slice(0,2)
    return copyCat
}
function removeFirstCat(){
    const copyCat = cats.slice(1,4)
    return copyCat
}