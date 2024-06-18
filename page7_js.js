window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (!user) {
        // If the user is not logged in, redirect them to the login page
        window.location.href = '/login.html';
    }

    // Load user-specific data
    // ...
};



document.addEventListener('DOMContentLoaded', async function () {
    const logoutbtn = document.querySelector(".next-page-button");
    logoutbtn.addEventListener('click',function (){
        localStorage.removeItem('user');

        // Redirect to the login page:
        window.location.href = '/login.html';
    })    
});


