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
    const user = JSON.parse(localStorage.getItem('user'));
    let payl = {"User":user}
    payl = JSON.stringify(payl);
    let Res = await fetch('http://localhost:3000/getdatapage8', {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        body: payl
    })
    console.log(Res);
    Res =await Res.json();
    console.log(Res)
    if(Res["sucess"]){
        Res = (Res["data"]);
        Res = JSON.parse(Res);
        for (let [key, val] of Object.entries(Res)){
            const ele = document.getElementById(key);
            console.log(ele)
            if(ele!=null&&Number(key)>12){
                console.log(ele);
                ele.value = val;
            }
            console.log(val);
        }
    }

    const form = document.getElementById('block7');

    //login
    form.addEventListener('submit',async function(e) {
        // Prevent default behavior:
        e.preventDefault();
        //console.log("y");
        // Create payload as new FormData object:
        const formData = new FormData(form);
        console.log(formData);
        let res = Object.fromEntries(formData);
        const user = JSON.parse(localStorage.getItem('user'));
        res["User"] = user;
        formData.append('user',user);
        console.log(res);
        const payload = JSON.stringify(res);
        for(data of formData){
            console.log(`${data[0]} ${data[1]}`)
        }
        console.log(payload);
        // const respofile = await fetch('http://localhost:3000/upload', {
        //     method: 'POST',
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: formData
        // })
        const respofile = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            mode: 'cors', // Allow cross-origin requests
            cache: 'no-cache',
            body: formData // Automatically sets Content-Type
        });
        
        console.log(respofile);
        //window.location.href = ("/src/page9.html")
        const respo = await fetch('http://localhost:3000/datapage8', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
    
        //console.log('y')
        const response1 = await respo.json()
        //const response2 = await respofile.json()
        // for(const key in response){
        //     var message = response[key]
        // }
        console.log(response1["success"])
        
        //if(response["success"]) window.location.href = ('/src/page2.html') 
        if(response1["success"]===true) window.location.href = ("/src/page9.html")
    })
    const logoutbtn = document.querySelector(".next-page-button");
    logoutbtn.addEventListener('click',function (){
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        // Redirect to the login page:
        window.location.href = '/src/login.html';
    })



    const viewbutton1 = document.querySelector(".viewbutton1")
    viewbutton1.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"1"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f1"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton3 = document.querySelector(".viewbutton3")
    viewbutton3.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"3"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f3"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton4 = document.querySelector(".viewbutton4")
    viewbutton4.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"4"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f4"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton5 = document.querySelector(".viewbutton5")
    viewbutton5.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"5"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f5"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton6 = document.querySelector(".viewbutton6")
    viewbutton6.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"6"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f6"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton7 = document.querySelector(".viewbutton7")
    viewbutton7.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"7"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f7"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton8 = document.querySelector(".viewbutton8")
    viewbutton8.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"8"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f8"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton9 = document.querySelector(".viewbutton9")
    viewbutton9.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"9"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f9"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    const viewbutton10 = document.querySelector(".viewbutton10")
    viewbutton10.addEventListener('click',async function(){
        const user = JSON.parse(localStorage.getItem('user'));
        let res = {"user":user,"part":"10"};
        const payload = JSON.stringify(res);
        let Res = await fetch('http://localhost:3000/view', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        Res =await Res.json();
        console.log(Res)
        if(Res["sucess"]){
            Res = (Res["f10"]);
            console.log(Res);
            window.location.href = `/uploads/${Res}`;
        }
    })

    
});


