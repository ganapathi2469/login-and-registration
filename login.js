const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
function test(){
    let user = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    let email = document.getElementById("gmail").value;
    
   let user_records=new Array();
   user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_records.some((v)=>{
       return v.email==email
   })){
       alert("Duplicate Data");
   }
   else{
       user_records.push({
           "name":user,
           "gmail":email,                                                                                                            
           "pass":password
       })
       localStorage.setItem("users",JSON.stringify(user_records));
       {
           alert("Registered Successfully");
       }
   }
}