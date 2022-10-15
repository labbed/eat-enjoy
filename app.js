var likes = document.getElementsByClassName("like");
var contenu = document.getElementsByClassName("contenu");
var small_menu = document.querySelector('.toggle_menu')
          var menu = document.querySelector('.menu')

          small_menu.onclick = function(){
               small_menu.classList.toggle('active');
               menu.classList.toggle('responsive');
            }
  for(let i=0;i<likes.length;i++)
     {
        let like= likes[i];
        like.addEventListener("click", function(){
        if (like.style.color== "red")
        {
        like.style.color="black"
        }
        else 
        like.style.color = "red";
                  });

     }
     
     


     var namee=document.getElementById("name")
     var email=document.getElementById("email")
     var number=document.getElementById("number")
     var date=document.getElementById("date")
     var reservations=[]
     var res={}

     function addRes(){
      var allEntries = JSON.parse(localStorage.getItem("reservations")) || [];
       res.name=namee.value
       res.email=email.value
res.number=number.value
res.date=date.value
allEntries.push(res);       
localStorage.setItem("reservations",JSON.stringify(allEntries))
     }
     
     var reservs=JSON.parse(localStorage.getItem("reservations"))

console.log(reservs)

updateTableHTML(reservs)
function updateTableHTML(myArray) {
   var tableBody = document.getElementById("tb");
 tableBody.innerHTML=""
   for(let i=0;i<myArray.length;i++){
let food=myArray[i]
      tableBody.innerHTML= tableBody.innerHTML+`<tr>
      <td>
      ${food.name}
      </td>
      <td>
      ${food.email}
      </td>
      <td>
      ${food.number}
      </td>
      <td>
      ${food.date}
      </td>
      </tr>`
   }
}

