// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    const scuberHQ = 42
    let numOfBlocks = pickup - scuberHQ
    return Math.abs(numOfBlocks);
}

console.log(distanceFromHqInBlocks(43));


function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup)*264
}

console.log(distanceFromHqInFeet(43));


function distanceTravelledInFeet(start, destination) {
    let totalDistance = Math.abs(destination - start)
    return totalDistance * 264;
}

console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);
    let fareCost = (totalFeet -400) * 0.02
    if (totalFeet < 400) {
        return 0
    }
    else if (totalFeet > 2500) {
        return 'cannot travel that far'
    }
    else if (totalFeet > 2000) {
        return 25
    }
    else {
       return fareCost 
    }
    





    // if (distanceTravelledInFeet(start, destination) < 400) {
    //     return 'free sample'
    // }
    // else
    //     if (totalFeet > 400 && totalFeet < 2000) {
    //         return totalFeet * 2 - 400;
    //     }
}

console.log(calculatesFarePrice(34, 32));