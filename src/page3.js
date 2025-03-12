let cnt=3;



let table = document.querySelector("#tableep3");





let addmore = document.querySelector("#addmoretableep3");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmore.addEventListener('click',()=>{
    cnt++;
    table.innerHTML+=`<tr>
    <td><input type="text" placeholder="S. No." required value=${cnt} /></td>
                        <td><input type="text" placeholder="Organization" required/></td>
                        <td><input type="text" placeholder="Work Profile" required/></td>
                        <td><input type="text" placeholder="Date of Joining" required/></td>
                        <td><input type="text" placeholder="Date of Leaving" required/></td>
                        <td><input type="text" placeholder="Duration (in years & months)" required/></td>
                        <!-- <td><input type="text" placeholder="Percentage" required/></td>
                        <td><input type="text" placeholder="Percentage" required/></td> -->
                         <td class="delete"><button class="deletebtn">X</button></td>
</tr>`
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table.addEventListener('click', ondelete);



// for table d page 3

let tabledp3 = document.querySelector("#tabledp3");
let addmoretabledp3 = document.querySelector("#addmoretabledp3");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretabledp3.addEventListener('click',()=>{
    tabledp3.innerHTML+=`<tr>
    <td><input type="text" placeholder="S. No." required /></td>
                        <td><input type="text" placeholder="Position" required/></td>
                        <td><input type="text" placeholder="Institute" required/></td>
                        <td><input type="text" placeholder="Supervisor" required/></td>
                        <td><input type="text" placeholder="Date of Joining" required/></td>
                        <td><input type="text" placeholder="Date of leaving" required/></td>
                        <td><input type="text" placeholder="Duration (in years & months)" required/></td>
                        <!-- <td><input type="text" placeholder="Division/Class" required/></td> -->
                        <!-- <td class="delete"><button class="deletebtn">X</button></td> -->
</tr>`
});



tabledp3.addEventListener('click', ondelete);


// for table c page 3

let tablecp3 = document.querySelector("#tablecp3");
let addmoretablecp3 = document.querySelector("#addmoretablecp3");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretablecp3.addEventListener('click',()=>{
    tablecp3.innerHTML+=`<tr>
    <td><input type="text" placeholder="S. No." required /></td>
    <td><input type="text" placeholder="Position" required/></td>
    <td><input type="text" placeholder="Employer" required/></td>
    <td><input type="text" placeholder="Course Taught" required/></td>
    <td><input type="text" placeholder="No. of Students" required/></td>
    <td><input type="text" placeholder="Date of Joining the Institute" required/></td>
    <td><input type="text" placeholder="Date of Leaving the Institute" required/></td>
    <td><input type="text" placeholder="Duration (in years & months)" required/></td>
    <td class="delete"><button class="deletebtn">X</button></td>
</tr>`
});



tablecp3.addEventListener('click', ondelete);


// for table b page 3

let tablep3 = document.querySelector("#tablebp3");
let addmoretablebp3 = document.querySelector("#addmoretablebp3");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretablebp3.addEventListener('click',()=>{
    tablebp3.innerHTML+=`<tr>
    <td><input type="text" placeholder="S.No." required /></td>
                        <td><input type="text" placeholder="Position" required/></td>
                        <td><input type="text" placeholder="Organization/Institution" required/></td>
                        <td><input type="text" placeholder="Date of Joining" required/></td>
                        <td><input type="text" placeholder="Date of Leaving" required/></td>
                        <td><input type="text" placeholder="Duration (in years & months)" required/></td>
                        <!-- <td><input type="text" placeholder="Percentage" required/></td>
                        <td><input type="text" placeholder="Percentage" required/></td> -->
                        <td class="delete"><button class="deletebtn">X</button></td>
</tr>`
});

// function ondelete(e){
//     if(!e.target.classList.contains("deletebtn")){
//         return;
//     }
//     const deletebtn = e.target;
//     deletebtn.closest("tr").remove();
// }


tablebp3.addEventListener('click', ondelete);


