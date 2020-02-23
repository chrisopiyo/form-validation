
function validation()
{
var userid = document.loan.firstName
function uid(min,max){
    if(userid.value.length==0||userid.value.length>=min||userid.value.length<=max)
{
    alert('invalid limit')
}
}


}

function alphabet(userid)
{
    //declaring a variable letter that stores the regularexpression
    var letter = /^[A-Za-z]+$/
    if (occupation.value.match(letter))
    {
        alert('correct')
        //return true
    }
    else
    {
      alert('value should not be numeric') 
      occupation.focus() 
      //returns false
    }
}