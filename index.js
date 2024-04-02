// Code your solution in this file!
const headquaters = 42
function distanceFromHqInBlocks(destination = 43) {
    return Math.abs(`${destination}` - `${headquaters}`)
  }

  const feetperblock = 264
  function distanceFromHqInFeet(destination = 43){
    return Math.abs ((`${destination}` - `${headquaters}`) * `${feetperblock}`)
  }

  function distanceFromHqInBlocks(destination = 50) {
    return Math.abs(`${destination}` - `${headquaters}`)
  }

  function distanceFromHqInFeet(destination = 50){
    return Math.abs ((`${destination}` - `${headquaters}`) * `${feetperblock}`)
  }

function distanceTravelledInFeet(location1=43, location2=48) {
  return Math.abs ((`${location1}` - `${location2}`) * `${feetperblock}`)
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs ((`${start}` - `${destination}`) * `${feetperblock}`)
  if (distance<=400) {return  (0);} 
  else if(distance > 400 && distance <= 2000){return ((distance - 400)*0.02);} 
  else if(distance > 2000 && distance <=2500){return (25)}
  else {return ('cannot travel that far')}
}