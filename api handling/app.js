let btn = document.getElementById("get-data");
let findName = document.getElementById("name");
let message = document.getElementById("message");
let reset = document.getElementById("reset");

const apikey = "https://dummyjson.com/users";
async function  getData() {
 let response = await fetch(apikey);
 let data =await response.json();
//  console.log(data["users"].length);
  for (let i = 0; i < data["users"].length; i++) {
        // console.log(findName.value.length);
       

            if(findName.value.toString().toLowerCase() === data["users"][i]["firstName"].toLowerCase()){
                // console.log("FullName:"+data["users"][i]["firstName"]+" "+data["users"][i]["lastName"]);
                // console.log("age:"+data["users"][i]["age"]);
                // console.log("gender: "+data["users"][i]["gender"]);
                // console.log("email:"+data["users"][i]["email"]);
                // console.log("Phone: "+data["users"][i]["phone"]);
                // console.log("Phone: "+data["users"][i]["address"]["country"]);
                let details= {
                    "fullname":data["users"][i]["firstName"]+" "+data["users"][i]["lastName"],
                    "age":data["users"][i]["age"],
                    "gender":data["users"][i]["gender"],
                    "email":data["users"][i]["email"],
                    "Phone":data["users"][i]["phone"]
                }
                
                
                    message.innerText = "FullName: " + details.fullname +'\n'+"Age: "+ details.age+'\n'+"Gender: "+details.gender+'\n'+"Email: "+details.email+'\n'+"Phone: "+details.Phone+"\n" +"Country: "+data["users"][i]["address"]["country"];
                
                message.classList.remove("remove");
                break;
            }
            
            // console.log("Not Found");
            // break;
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
   
    getData();
   
    // console.log(findName.value);
   
});
reset.addEventListener("click",()=>{
    message.classList.add("remove");
    findName.value = "";
})