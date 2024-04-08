let table2p2 = document.querySelector("#table2p2");
let addmoretable2p2 = document.querySelector("#addmoretable2p2");
//let deletebtn = document.querySelectorAll(".deletebtn");


addmoretable2p2.addEventListener('click',()=>{
    table2p2.innerHTML+=`<tr><td><input type="text" placeholder="Degree" required /></td>
    <td><input type="text" placeholder="Colleage" required/></td>
    <td><input type="text" placeholder="Subjects" required/></td>
    <td><input type="text" placeholder="Year of Joining" required/></td>
    <td><input type="text" placeholder="Year of Graduation" required/></td>
    <td><input type="text" placeholder="Duration" required/></td>
    <td><input type="text" placeholder="Percentage" required/></td>
    <td><input type="text" placeholder="Percentage" required/></td>
     <td class="delete"><button class="deletebtn">X</button></td> </tr>  `
});

function ondelete(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const deletebtn = e.target;
    deletebtn.closest("tr").remove();
}


table2p2.addEventListener('click', ondelete);
