// Add your code here
// Functions
const url = 'http://localhost:3000/users';

function submitData(userName, userEmail){

    let newUser = {
        name: userName,
        email: userEmail
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newUser)
    };

    fetch(url, options) 
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
        throw new Error('Response was not OK!');
        }
    })
    .then(data => {
        console.log(data)
        let div = document.createElement('div');
        let li = document.createElement('li')
        li.innerHTML = `
            <p>Name: ${data.name}</p> <br> 
            <p>Email: ${data.email}</p>
        `
        div.appendChild(li)
        document.body.appendChild(div)
    })
    .catch(error => {
        console.error('There was an error!', error)
    })
}

// function deleteUser(Id){

// }

submitData('Melky', 'melky@gmail.com')
