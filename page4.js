
let table1p4 = document.querySelector("#table1p4");
let addmoretable1p4 = document.querySelector("#addmoretable1p4");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable1p4.addEventListener('click',()=>{
    table1p4.innerHTML+=`<tr><td><input type="text" placeholder="S.No." required /></td>
    <td><input type="text" placeholder="Author(s)" required/></td>
    <td><input type="text" placeholder="Name of Journal/Conference" required/></td>
    <td><input type="text" placeholder="Year, Vol., Page" required/></td>
    <td><input type="text" placeholder="Impact Factor" required/></td>
    <td><input type="text" placeholder="DOI	Status" required/></td>
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


table1p4.addEventListener('click', ondelete);



let table2p4 = document.querySelector("#table2p4");
let addmoretable2p4 = document.querySelector("#addmoretable2p4");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable2p4.addEventListener('click',()=>{
    table2p4.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Inventor(s)" required/></td>
    <td><input type="text" placeholder="Title of Patent" required/></td>
    <td><input type="text" placeholder="Country of Patent" required/></td>
    <td><input type="text" placeholder="Patent Number" required/></td>
    <td><input type="text" placeholder="Date of Filing" required/></td>
    <td><input type="text" placeholder="Date of Published" required/></td>
    <td><input type="text" placeholder="Status Filed/Published/Granted" required/></td>
    <td class="delete"><button class="deletebtn">X</button></td> </tr>`
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table2p4.addEventListener('click', ondelete);





let table3p4 = document.querySelector("#table3p4");
let addmoretable3p4 = document.querySelector("#addmoretable3p4");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable3p4.addEventListener('click',()=>{
    table3p4.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Author(s)" required/></td>
    <td><input type="text" placeholder="Title of the Book" required/></td>
    <td><input type="text" placeholder="Year of Publication" required/></td>
    <td><input type="text" placeholder="ISBN" required/></td>
    <!-- <td><input type="text" placeholder="Date of leaving" required/></td>
    <td><input type="text" placeholder="Duration (in years & months)" required/></td> -->
    <!-- <td><input type="text" placeholder="Division/Class" required/></td> -->
     <td class="delete"><button class="deletebtn">X</button></td></tr>  `
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table3p4.addEventListener('click', ondelete);





let table4p4 = document.querySelector("#table4p4");
let addmoretable4p4 = document.querySelector("#addmoretable4p4");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable4p4.addEventListener('click',()=>{
    table4p4.innerHTML+=`<tr><td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Author(s)" required/></td>
    <td><input type="text" placeholder="Title of the Chapter(s)" required/></td>
    <td><input type="text" placeholder="Year of Publication" required/></td>
    <td><input type="text" placeholder="ISBN" required/></td>
    <!-- <td><input type="text" placeholder="Date of leaving" required/></td>
    <td><input type="text" placeholder="Duration (in years & months)" required/></td> -->
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


table4p4.addEventListener('click', ondelete);

