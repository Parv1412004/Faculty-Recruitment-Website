document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mysignupform');

    // Sign Up
    form.addEventListener('submit',async function(e) {
        // Prevent default behavior:
        e.preventDefault();
        // Create payload as new FormData object:
        const formData = new FormData(form);
        const res = Object.fromEntries(formData);
        const payload = JSON.stringify(res);
        for(data of formData){
            console.log(`${data[0]} ${data[1]}`)
        }
        console.log(payload);
        const respo = await fetch('http://localhost:3000/signup',{
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
        console.log(response.message)
    
    })
});


