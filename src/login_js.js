// import dotenv from 'dotenv'
// dotenv.config()

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myloginform');
    // const signup = document.querySelector('.signupButton');
    // signup.addEventListener('click',()=>{
    //     window.location.href = `http://127.0.0.1:${process.env.WEB_PORT}/signup.html`
    // })
    //login
    form.addEventListener('submit',async function(e) {
        // Prevent default behavior:
        e.preventDefault();
        // Create payload as new FormData object:
        const formData = new FormData(form);
        console.log(formData);
        const res = Object.fromEntries(formData);
        console.log(res);
        const payload = JSON.stringify(res);
        for(data of formData){
            console.log(`${data[0]} ${data[1]}`)
        }
        console.log(payload);
        const respo = await fetch('http://localhost:3000/login', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        const response = await respo.json()
        // for(const key in response){
        //     var message = response[key]
        // }
        // console.log("Details");
        // console.log(response);
        if(response["success"]){
            // Save the user data in local storage:
            //console.log(response);
            //console.log("t");
            localStorage.setItem('user', JSON.stringify(response["user"]));
            localStorage.setItem('name',JSON.stringify({
                firstName: response.firstName,
                lastName: response.lastName
            }))
            // Redirect to the next page:
            window.location.href = '/src/page1.html';
        }
        else{
            console.log("Wrong user details!")
        }
    })

});


