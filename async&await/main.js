// async and await 
// async and await are used to make promises easier to work with.  
// async makes a function return a Promise
// await makes a function wait for a Promise


const getData = async() => {
    const request = await fetch('https://jsonplaceholder.typicode.com/users/');
    const response = await request.json();
    return response;
}


getData().then(data => {
    let id = document.getElementById("Id");
    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    data.forEach(user => {
        id.textContent = `ID: ${user.id}`;
        name.textContent = `Name: ${user.name}`;
        username.textContent = `Username: ${user.username}`;
        email.textContent = `Email: ${user.email}`;
        address.textContent = `City: ${user.address.street}`;
    });
}).catch(error => {
    console.log('something went wrong: ', error);
})