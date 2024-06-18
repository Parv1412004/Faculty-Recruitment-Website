
let table1p6 = document.querySelector("#table1p6");
let addmoretable1p6 = document.querySelector("#addmoretable1p6");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable1p6.addEventListener('click',()=>{
    table1p6.innerHTML+=`<tr><td><input type="text" placeholder="S.No." required /></td>
    <td><input type="text" placeholder="Name of Student/Research Scholar" required/></td>
    <td><input type="text" placeholder="Title of Thesis" required/></td>
    <td><input type="text" placeholder="Role" required/></td>
    <td><input type="text" placeholder="Ongoing/Completed" required/></td>
    <td><input type="text" placeholder="Ongoing Since/ Year of Completion" required/></td>
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


table1p6.addEventListener('click', ondelete);


let table2p6 = document.querySelector("#table2p6");
let addmoretable2p6 = document.querySelector("#addmoretable2p6");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable2p6.addEventListener('click',()=>{
    table2p6.innerHTML+=`<tr><td><input type="text" placeholder="S.No." required /></td>
    <td><input type="text" placeholder="Name of Student/Research Scholar" required/></td>
    <td><input type="text" placeholder="Title of Thesis" required/></td>
    <td><input type="text" placeholder="Role" required/></td>
    <td><input type="text" placeholder="Ongoing/Completed" required/></td>
    <td><input type="text" placeholder="Ongoing Since/ Year of Completion" required/></td>
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


table2p6.addEventListener('click', ondelete);



let table3p6 = document.querySelector("#table3p6");
let addmoretable3p6 = document.querySelector("#addmoretable3p6");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable3p6.addEventListener('click',()=>{
    table3p6.innerHTML+=`<tr><td><input type="text" placeholder="S.No." required /></td>
    <td><input type="text" placeholder="Name of Student/Research Scholar" required/></td>
    <td><input type="text" placeholder="Title of Thesis" required/></td>
    <td><input type="text" placeholder="Role" required/></td>
    <td><input type="text" placeholder="Ongoing/Completed" required/></td>
    <td><input type="text" placeholder="Ongoing Since/ Year of Completion" required/></td>
    <!-- <td><input type="text" placeholder="Percentage" required/></td>
    <td><input type="text" placeholder="Percentage" required/></td> -->
    <td class="delete"><button class="deletebtn">X</button></td></tr> `
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table3p6.addEventListener('click', ondelete);