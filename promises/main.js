// promises 
// Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// let condition = false;

// const promise = new Promise( (resolove, reject) => {
//     if (condition) {
//         resolove('promise is looking good!');
//     }else {
//         reject('promise is looking Crazy!!!');
//     }
// });

// promise.then( (successMessage) => {
//     console.log(successMessage);
// }).catch( (failureMessage) => {
//     console.log(failureMessage);
// });

/*
// simple HttpRquest using promises.

const getPosts = (recources) => {
    return new Promise( (resolve, reject) => {
        let request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }else if (request.readyState === 4) {
                reject('something went wrong......');
            }
        });
        request.open('GET', recources);
        request.send();
    });
}

getPosts('./poss.JSON').then( (data) => {
    console.log(data);
    return getPosts('https://jsonplaceholder.typicode.com/posts');
}).catch( (err) => console.log(err));
*/

// fetch method

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => {
        return response.json();
    }).then ( (data) => {
        console.log(data);
    }).catch( (err) => {
        console.log(err);
    });




