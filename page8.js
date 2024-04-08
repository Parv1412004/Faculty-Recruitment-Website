
let table1p8 = document.querySelector("#table1p8");
let addmoretable1p8 = document.querySelector("#addmoretable1p8");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable1p8.addEventListener('click',()=>{
    table1p8.innerHTML+=`<tr>
    <td><input type="text" placeholder="Name" required /></td>
    <td><input type="text" placeholder="Position" required/></td>
    <td><input type="text" placeholder="Association with Referee" required/></td>
    <td><input type="text" placeholder="Institution/Organization" required/></td>
    <td><input type="text" placeholder="E-mail" required/></td>
    <td><input type="text" placeholder="Contact No." required/></td>
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


table1p8.addEventListener('click', ondelete);