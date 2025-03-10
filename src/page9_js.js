window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (!user) {
        // If the user is not logged in, redirect them to the login page
        window.location.href = '/src/login.html';
    }

    // Load user-specific data
    // ...
};



document.addEventListener('DOMContentLoaded', async function () {
    const form = document.getElementById('block8');

    //login
    form.addEventListener('submit',async function(e) {
        // Prevent default behavior:
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"port":window.location.port};
        const payload = JSON.stringify(res);
        console.log(payload);
        
        let respo = await fetch('http://localhost:3000/pdf', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        //window.location.href = '/application.pdf'
        console.log(respo);
        respo = await respo.json();
        console.log(respo);
        if(respo["success"]){
            window.location.href = '/application.pdf'
        }
        
    })
    const logoutbtn = document.querySelector(".next-page-button");
    logoutbtn.addEventListener('click',function (){
        localStorage.removeItem('user');

        // Redirect to the login page:
        window.location.href = '/src/login.html';
    })
});


