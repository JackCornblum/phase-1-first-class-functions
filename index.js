function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights() {
    console.log('Pump iron');
}
  
function swimFortyLaps() {
    console.log('Swim 40 laps');
} 

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function monday() {
    exerciseRoutine(liftWeights);
}

exerciseRoutine(() => console.log('Stretch! Work that core!'));

function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = 'protein bar';
    }
    else if (exercise === swimFortyLaps) {
        breakfast = 'kale smoothie';
    }
    else {
        breakfast = 'granola';
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    } 
}

const spy = callback => console.log('I was called');

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(callback) {
    return function namedFunction() {
        console.log('Returned function');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('returned function');
    }
}