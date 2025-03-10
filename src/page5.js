
let table1p5 = document.querySelector("#table1p5");
let addmoretable1p5 = document.querySelector("#addmoretable1p5");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable1p5.addEventListener('click',()=>{
    table1p5.innerHTML+=`<tr><td><input type="text" placeholder="S.No." required /></td>
    <td><input type="text" placeholder="Name of the Professional Society" required/></td>
    <td><input type="text" placeholder="Membership Status(Lifetime/Annual)" required/></td>
    <!-- <td><input type="text" placeholder="Year, Vol., Page" required/></td>
    <td><input type="text" placeholder="Impact Factor" required/></td>
    <td><input type="text" placeholder="DOI	Status" required/></td> -->
    <!-- <td><input type="text" placeholder="Percentage" required/></td>
    <td><input type="text" placeholder="Percentage" required/></td> -->
    <td class="delete"><button class="deletebtn">X</button></td></tr>`
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table1p5.addEventListener('click', ondelete);



let table2p5 = document.querySelector("#table2p5");
let addmoretable2p5 = document.querySelector("#addmoretable2p5");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable2p5.addEventListener('click',()=>{
    table2p5.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Type of Training Received" required/></td>
    <td><input type="text" placeholder="Organisation" required/></td>
    <td><input type="text" placeholder="Year" required/></td>
    <td><input type="text" placeholder="Duration (in years & months)" required/></td>
    <!-- <td><input type="text" placeholder="Date of Filing" required/></td>
    <td><input type="text" placeholder="Date of Published" required/></td>
    <td><input type="text" placeholder="Status Filed/Published/Granted" required/></td> -->
    <td class="delete"><button class="deletebtn">X</button></td> </tr>`
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table2p5.addEventListener('click', ondelete);





let table3p5 = document.querySelector("#table3p5");
let addmoretable3p5 = document.querySelector("#addmoretable3p5");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable3p5.addEventListener('click',()=>{
    table3p5.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Name of Award" required/></td>
    <td><input type="text" placeholder="Awarded By" required/></td>
    <td><input type="text" placeholder="Year" required/></td>
    <!-- <td><input type="text" placeholder="ISBN" required/></td> -->
    <!-- <td><input type="text" placeholder="Date of leaving" required/></td>
    <td><input type="text" placeholder="Duration (in years & months)" required/></td> -->
    <!-- <td><input type="text" placeholder="Division/Class" required/></td> -->
    <td class="delete"><button class="deletebtn">X</button></td> </tr>`
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table3p5.addEventListener('click', ondelete);





let table4p5 = document.querySelector("#table4p5");
let addmoretable4p5 = document.querySelector("#addmoretable4p5");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable4p5.addEventListener('click',()=>{
    table4p5.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Sponsoring Agency" required/></td>
    <td><input type="text" placeholder="Title of Project" required/></td>
    <td><input type="text" placeholder="Sanctioned Amount (₹)" required/></td>
    <td><input type="text" placeholder="Period	" required/></td>
    <td><input type="text" placeholder="Role" required/></td>
    <td><input type="text" placeholder="Status (Completed/On-going)" required/></td>
    <!-- <td><input type="text" placeholder="Division/Class" required/></td> -->
    <td class="delete"><button class="deletebtn">X</button></td> </tr> `
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table4p5.addEventListener('click', ondelete);




let table5p5 = document.querySelector("#table5p5");
let addmoretable5p5 = document.querySelector("#addmoretable5p5");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable5p5.addEventListener('click',()=>{
    table5p5.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Organization" required/></td>
    <td><input type="text" placeholder="Title of Project" required/></td>
    <td><input type="text" placeholder="Amount of Grant" required/></td>
    <td><input type="text" placeholder="Period	" required/></td>
    <td><input type="text" placeholder="Role" required/></td>
    <td><input type="text" placeholder="Status" required/></td>
    <!-- <td><input type="text" placeholder="Division/Class" required/></td> -->
     <td class="delete"><button class="deletebtn">X</button></td> </tr>  `
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table5p5.addEventListener('click', ondelete);