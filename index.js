const userName = "Jim";
const userEmail = "jim@jim.com";
// console.log(userEmail)

function submitData(userName, userEmail) {
    const apiUrl = 'http://localhost:3000/users'

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(response => response.json())
    .then(user => {
        const userID = user.id
        const h1 = document.createElement('h1')
        h1.textContent = userID
        document.body.appendChild(h1)
        // console.log(userID)        
    })
    .catch(error => () => {
        const h1 = document.createElement('h1')
        history.textContent = 'Unauthorized Access'
        document.body.appendChild(h1) 
    })


}

submitData(userName, userEmail)
