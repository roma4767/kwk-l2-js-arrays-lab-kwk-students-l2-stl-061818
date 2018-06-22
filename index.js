const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  let newList = drivers.push(name)
  return newList.map(l)
}