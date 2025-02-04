// callback function

function printFirst(callback) {
    setTimeout ( ()=> {
        console.log("First");
        callback();
    }, 1000)
}

function printSecond() {
    console.log("Second");
}

printFirst(printSecond);