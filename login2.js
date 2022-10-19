function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
{
     alert("YEAH!you take your first step");
     return false;
  
}
else
{
    alert("OOPS!try again")
}    

}