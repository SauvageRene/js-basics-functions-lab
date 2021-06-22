// Code your solution in this file!

// function distanceTravelledInFeet (feet) {
//     return distanceFromHqInBlocks - feet;
// };

function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
};

function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks) * 264;
    return feet;
};

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    // switch (true) {
    //     case (distance <= 400):
    //         return 0;
    //     case (400 < distance && distance > 2000):
    //         return (distance - 400) * 0.02 ;
    //     case (distance > 2000 && distance < 2500):
    //         return 25; 
    //     default: 
    //         return 'cannot travel that far'
    // };

    // Switch statements can't take in greater than or equal to 
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
}};
