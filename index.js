
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//destructivelyAppendCat(name)
function destructivelyAppendCat(catName){
    cats.push(catName);
}

//2)   destructivelyPrependCat(name) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(catName){
    cats.unshift(catName);
}

//3)destructivelyRemoveLastCat() removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
}    

//4)  destructivelyRemoveFirstCat()*/removes the first cat from the cats array
function destructivelyRemoveFirstCat(){
    cats.shift();
}

/*5) appendCat(name)
        1) appends a cat to the cats array and returns a new array, leaving the cats array unchanged*/
function appendCat(nameOfCat){
    const appendCatArray = [...cats, nameOfCat]
    //next line doesn't work because the push dot operator thing RETURNS the number of the elements in the array
    //const appendCatArray = cats.push(nameOfCat);
    return appendCatArray;
}


/*6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
      */
function prependCat(nameOfCat){
    const prependCatArray = [nameOfCat, ...cats];
    return prependCatArray;
} 

//LEFT OFF HERE
/*7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
*/
function removeLastCat(){
   // const removeLastCatArray = cats.splice(0, 1);  <--- is this not working bc it changes the original cats?? CORRECT, yay you learned
    const removeLastCatArray = cats.slice(0, cats.length -1);
    return removeLastCatArray;
}

/*8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged*/
function removeFirstCat(){
    const removeFirstCatArray = cats.slice(1);
    return removeFirstCatArray;
}
