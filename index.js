let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name)
}

function   destructivelyPrependCat(name) {
    return cats.unshift(name)
} 

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name) 
}


function appendCat(name) {
    const coolCats = [...cats, name] 
    return coolCats
}

function prependCat(name) {
    const coldCats = [name, ...cats] 
    return coldCats
}

function removeLastCat() { 
    return cats.slice(0, cats.length - 1)
}
    
function removeFirstCat() {
    return cats.slice(1)  
}


  
