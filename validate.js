function validate(name)
{
   formid = document.getElementById(name)
   if(formid.value.length>5 && form.value.length<13)
   {
       formid.style.border = '1px solid green'
   }
   else
   {
       formid.style.border ='1px solid red'
   }
}