//click it button...
//check the validation of the html inputfields
$(document).ready(function(){
$("#btn").on("click",function(){
   var name=$("#name").val();
   if(name.match(/^\d+/) || name === "")
   {
      alert("your Name must be character and it must be filled out..!");
   }
   var age=$("#age").val();
   var gender=$("input[type=radio][name=gender]:checked");
   if(!age.match(/^\d+/) || age === "" || !gender.val())
   {
      alert("your Age and gender must be filled out...!");
   }
//on the basis of condition the input fields are display on the div elemnt
   if (age>=6 && age<=13) 
   {
      
      if (gender[0].value=="female") 
      {
         $("#btn").css("display","none");
         $("#btn1").css("display","block");
         $("#sub").css("display","block");
         $("#demo").append("<label>SchoolName:<input type=text id=sname class=form-control><br><label>ClassName:<input type=text id=cname class=form-control><br><label>FavoriteSubject:<input type=text id=favsub class=form-control><br><label>Hobbies:<input type=text id=hobb class=form-control><br>");
      }
      else
      {
         $("#demo").append("<label>SchoolName:<input type=text id=sname class=form-control><br><label>ClassName:<input type=text id=cname class=form-control><br><label>FavoriteSubject:<input type=text id=favsub class=form-control><br><label>Hobbies:<input type=text id=hobb class=form-control><br>");
      }
   }
   else if(age>=18 && age<=24)
   {
      $("#btn").css("display","none");
      $("#btn1").css("display","block");
      $("#sub").css("display","block");
      if (gender[0].value=="female") 
      {
         $("#demo").append("<label>CollageName:<input type=text id=colname class=form-control><br><label>ClassName:<input type=text id=cname class=form-control ><br><label>FavoriteMovie:</label><input type=text id=favmov class=form-control>");   
      }
      else
      {
         $("#demo").append("<label>CollageName:<input type=text id=colname class=form-control><br><label>ClassName:<input type=text id=cname class=form-control><br><label>FavoriteSport Star:<input type=text id=favsport class=form-control><br><label>FavoriteMovie:<input type=text id=favmov class=form-control><br>");
      }
   }
   else if(age>=25 && age<=56)
   {
      $("#btn").css("display","none");
      $("#btn1").css("display","block");
      $("#sub").css("display","block");
      $("#hideme").css("display","block");
      if (gender[0].value=="female") 
      {
         $("#demo").append("<label>Profession:<input type=text id=prof class=form-control><br><label>Income:<input type=text id=incom class=form-control>");
      }
      else
      {
         $("#demo").append("<label>Profession:<input type=text id=prof class=form-control><br><label>Income:<input type=text id=incom class=form-control>");
      }
   }  
});
});



//view details  function
//validation of html input fields
$(document).ready(function(){
$("#btn1").on("click",function(){
   //view the entered details
   //validation of the input fields
   var age=$("#age").val();
   var gender=$("input[type=radio][name=gender]:checked");
   if (age>=6 && age<=13) 
   {
      var sname=$("#sname").val();
      var cname=$("#cname").val();
      var favsub=$("#favsub").val();
      var hobb=$("#hobb").val();
      if (gender[0].value=="female") 
      {
         if(!sname.match(/^[A-Za-z]+$/) || !sname )
         {
            alert("Please Fill your school name and does not contain number!");
         }
         else if(isNaN(cname) || !cname )
         {
            alert("Please Fill your class name does not contain characters");
         }
         else if(!favsub.match(/^[A-Za-z]+$/) || !favsub )
         {
            alert("Please Fill your fav subject does not contain special characters or a number!");
         }

         else if(!hobb.match(/^[A-Za-z]+$/) || !hobb )
         {
            alert("Please Fill your Hobbies does not contain numbers..!");
         }
         else
         {

            $("#display").html("SchoolName:"+sname+"<br>"+"ClassName:"+cname+"<br>"+"Favorite subject:"+favsub+"<br>"+"Hobbies:"+hobb);
         }
      }
      else
      {
         if(!sname.match(/^[A-Za-z]+$/) || !sname )
         {
            alert("Please Fill your school name and does not contain number!");
         }
         else if(isNaN(cname) || !cname )
         {
            alert("Please Fill your class name does not contain characters");
         }
         else if(!favsub.match(/^[A-Za-z]+$/) || !favsub )
         {
         alert("Please Fill your fav subject does not contain special characters or a number!");
         }
         else if(!hobb.match(/^[A-Za-z]+$/) || !hobb )
         {
            alert("Please Fill your Hobbies does not contain numbers..!");
         }
         else
         {
            $("#display").html("SchoolName:"+sname+"<br>"+"ClassName:"+cname+"<br>"+"Favorite subject:"+favsub+"<br>"+"Hobbies:"+hobb);
         }
      }
   }
   else if(age>=18 && age<=24)
   {
      var colname=$("#colname").val();
      var cname=$("#cname").val();
      var favmov=$("#favmov").val();
      var favsport=$("#favsport").val();
      if (gender[0].value=="female") 
      {
         if(!colname.match(/^[A-Za-z]+$/) || !colname )
         {
            alert("Please Fill your Collage name and does not contain number!");
         }
         else if(!cname.match(/^[A-Za-z0-9]+$/) || !cname )
         {
            alert("Please Fill your class name");
         }
         else if(!favmov.match(/^[A-Za-z]+$/) || !favmov )
         {
            alert("Please Fill your favorite movie does not contain special characters or a number!");
         }
         else
         {
            $("#display").html("CollageName:"+colname+"<br>"+"ClassName:"+cname+"<br>"+"Favorite Movie:"+favmov);
         }
      }
      else
      {
         if(!colname.match(/^[A-Za-z]+$/) || !colname )
         {
            alert("Please Fill your Collage name and does not contain number!");
         }
         else if(!cname.match(/^[A-Za-z0-9]+$/) || !cname )
         {
            alert("Please Fill your class name");
         }
         else if(!favmov.match(/^[A-Za-z]+$/) || !favmov )
         {
            alert("Please Fill your favorite movie does not contain special characters or a number!");
         }
         else if(!favsport.match(/^[A-Za-z]+$/) || !favsport )
         {
            alert("Please Fill your Favorite Sport does not contain numbers..!");
         }
         else
         {
            $("#display").html("CollageName:"+colname+"<br>"+"ClassName:"+cname+"<br>"+"Favorite Movie:"+favmov+"<br>"+"FavoriteSport Star:"+favsport);
         }
      }
   }
   else if(age>=25 && age<=80)
   {
      var status=$("input[type=radio][name=status]:checked");
      if ($("input[name=status]:checked")) 
      {
         alert("the marital status entered");
      }
      else
      {
         alert("please fill your marital status.....!!");
      }
      if (gender[0].value=="female") 
      {
         var prof=$("#prof").val();
         var incom=$("#incom").val();
         if (status[0].value=="Married") 
         {
            var status=$("#mar").val();
            var husn=$("#husn").val();
            var husprof=$("#husprof").val();
            var place=$("#place").val();
            if(!prof.match(/^[A-Za-z]+$/) || !prof )
            {
               alert("Please Fill your Profession and does not contain number!");
            }
            else if(isNaN(incom) || !incom )
            {
               alert("Please Fill your income does not contain characters");
            }
            else if(!husn.match(/^[A-Za-z]+$/) || !husn )
            {
               alert("Please Fill your husband name does not contain special characters or a number!");
            }
            else if(!husprof.match(/^[A-Za-z]+$/) || !husprof )
            {
               alert("Please Fill your husband Profession that does not contain numbers..!");
            }
            else if(!place.match(/^[A-Za-z]+$/) || !place )
            {
               alert("Please Fill youur place that does not contain numbers..!");
            }
            else
            {
               $("#display").html("Profession:"+prof+"<br>"+"income:"+incom+"<br>"+"marital status:"+status+"<br>"+"Husband Name:"+husn+"<br>"+"Husband Profession:"+husprof+"<br>"+"Place:"+place);
            }
         }
         else if (status[0].value=="UnMarried")
         {
            var status=$("#unmar").val();
            if(!prof.match(/^[A-Za-z]+$/) || !prof )
            {
               alert("Please Fill your Profession and does not contain number!");
            }
            else if(isNaN(incom) || !incom )
            {
               alert("Please Fill your Income does not contain characters");
            }
            else
            {
               $("#display").html("Profession:"+prof+"<br>"+"income:"+incom+"<br>"+"marital status:"+status);
            }
         }
      }
      else
      {
         var prof=$("#prof").val();
         var incom=$("#incom").val();
         if (status[0].value=="Married") 
         {
            var status=$("#mar").val();
            if(!prof.match(/^[A-Za-z]+$/) || !prof )
            {
               alert("Please Fill your Profession and does not contain number!");
            }
            else if(isNaN(incom) || !incom )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else
            {
               $("#display").html("Profession:"+prof+"<br>"+"income:"+incom+"<br>"+"marital status:"+status);
            }
         }
         else if (status[0].value=="UnMarried")
         {
            
            var status=$("#unmar").val();
            if(!prof.match(/^[A-Za-z]+$/) || !prof )
            {
               alert("Please Fill your Profession and does not contain number!");
            }
            else if(isNaN(incom) || !incom )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else
            {
               $("#display").html("Profession:"+prof+"<br>"+"income:"+incom+"<br>"+"marital status:"+status);
            }
         }
      }
   }
});
});

//married radio button function......
//if the female will married display the husband details
$(document).ready(function(){
   $("#mar").on("click",function(){
      var age=$("#age").val();
      var gender=$("input[type=radio][name=gender]:checked");
      if (gender[0].value =="female") 
      {
         $("#demo").append("<label>Husband Name:<input type=text id=husn class=form-control><br><label>Husband Profession:<input type=text id=husprof class=form-control><br><label>Place:<input type=text id=place class=form-control>");
      }
   });
});


//submit function button
//validate all the input fields and submit then reload the page
$(document).ready(function(){
   $("#sub").on("click",function(){
      var age=$("#age").val();
      var gender=$("input[type=radio][name=gender]:checked");
      if (age>=6 && age<=13) 
      {
         var sname=$("#sname").val();
         var cname=$("#cname").val();
         var favsub=$("#favsub").val();
         var hobb=$("#hobb").val();
         if (gender[0].value=="female") 
         {
            if(!sname.match(/^[A-Za-z]+$/) || !sname )
            {
               alert("Please Fill your school name and does not contain number!");
            }
            else if(isNaN(cname) || !cname )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else if(!favsub.match(/^[A-Za-z]+$/) || !favsub )
            {
               alert("Please Fill your fav subject does not contain special characters or a number!");
            }
            else if(!hobb.match(/^[A-Za-z]+$/) || !hobb )
            {
               alert("Please Fill your Hobbies does not contain numbers..!");
            }
            else
            {
                  alert("Data Saved Successfully");
                  location.reload();
            }
         }
         else
         {
            if(!sname.match(/^[A-Za-z]+$/) || !sname )
            {
               alert("Please Fill your school name and does not contain number!");
            }
            else if(isNaN(cname) || !cname )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else if(!favsub.match(/^[A-Za-z]+$/) || !favsub )
            {
            alert("Please Fill your fav subject does not contain special characters or a number!");
            }
            else if(!hobb.match(/^[A-Za-z]+$/) || !hobb )
            {
               alert("Please Fill your Hobbies does not contain numbers..!");
            }
            else
            {
               alert("Data Saved Successfully");
               location.reload();
            }
         }
      }
      else if(age>=18 && age<=24)
      {
         var colname=$("#colname").val();
         var cname=$("#cname").val();
         var favmov=$("#favmov").val();
         var favsport=$("#favsport").val();
         if (gender[0].value=="female") 
         {
            if(!colname.match(/^[A-Za-z]+$/) || !colname )
            {
               alert("Please Fill your Collage name and does not contain number!");
            }
            else if(isNaN(cname) || !cname )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else if(!favmov.match(/^[A-Za-z]+$/) || !favmov )
            {
               alert("Please Fill your favorite movie does not contain special characters or a number!");
            }
            else
            {
               alert("Data Saved Successfully");
               location.reload();
            }
         }
         else
         {
            if(!colname.match(/^[A-Za-z]+$/) || !colname )
            {
               alert("Please Fill your Collage name and does not contain number!");
            }
            else if(isNaN(cname) || !cname )
            {
               alert("Please Fill your class name does not contain characters");
            }
            else if(!favmov.match(/^[A-Za-z]+$/) || !favmov )
            {
               alert("Please Fill your favorite movie does not contain special characters or a number!");
            }
            else if(!favsport.match(/^[A-Za-z]+$/) || !favsport )
            {
               alert("Please Fill your Favorite Sport does not contain numbers..!");
            }
            else
            {
               alert("Data Saved Successfully");
               location.reload();
            }
         }
      }
      else if(age>=25 && age<=80)
      {
         var status=$("input[type=radio][name=status]:checked");
         if ($("input[name=status]:checked")) 
         {
            alert("the marital status entered");
         }
         else
         {
            alert("please fill your marital status.....!!");
         }
         if (gender[0].value=="female") 
         {
            var prof=$("#prof").val();
            var incom=$("#incom").val();
            if (status[0].value=="Married") 
            {
               var status=$("#mar").val();
               var husn=$("#husn").val();
               var husprof=$("#husprof").val();
               var place=$("#place").val();
               if(!prof.match(/^[A-Za-z]+$/) || !prof )
               {
                  alert("Please Fill your Profession and does not contain number!");
               }
               else if(isNaN(incom) || !incom )
               {
                  alert("Please Fill your income does not contain characters");
               }
               else if(!husn.match(/^[A-Za-z]+$/) || !husn )
               {
                  alert("Please Fill your husband name does not contain special characters or a number!");
               }
               else if(!husprof.match(/^[A-Za-z]+$/) || !husprof )
               {
                  alert("Please Fill your husband Profession that does not contain numbers..!");
               }
               else if(!place.match(/^[A-Za-z]+$/) || !place )
               {
                  alert("Please Fill youur place that does not contain numbers..!");
               }
               else
               {
                  alert("Data Saved Successfully");
                  location.reload();
               }
            }
            else if (status[0].value=="UnMarried")
            {
               var status=$("#unmar").val();
               if(!prof.match(/^[A-Za-z]+$/) || !prof )
               {
                  alert("Please Fill your Profession and does not contain number!");
               }
               else if(isNaN(incom) || !incom )
               {
                  alert("Please Fill your class name does not contain characters");
               }
               else
               {
                  alert("Data Saved Successfully");
                  location.reload();
               }
            }
         }
         else
         {
            var prof=$("#prof").val();
            var incom=$("#incom").val();
            if (status[0].value=="Married") 
            {
               var status=$("#mar").val();
               if(!prof.match(/^[A-Za-z]+$/) || !prof )
               {
                  alert("Please Fill your Profession and does not contain number!");
               }
               else if(isNaN(incom) || !incom )
               {
                  alert("Please Fill your class name does not contain characters");
               }
               else
               {
                  alert("Data Saved Successfully");
                  location.reload();               }
            }
            else if (status[0].value=="UnMarried")
            {
               
               var status=$("#unmar").val();
               if(!prof.match(/^[A-Za-z]+$/) || !prof )
               {
                  alert("Please Fill your Profession and does not contain number!");
               }
               else if(isNaN(incom) || !incom )
               {
                  alert("Please Fill your class name does not contain characters");
               }
               else
               {
                  alert("Data Saved Successfully");
                  location.reload();
               }
            }
         }
      }
   });
});


//back function..
//reload the whole page
$('#back').click(function(){
   location.reload(); 
});

/*change function
$('#name').change(function() {
   location.reload() = "samepage.php?update=name&update_id=" + $(this).val();
});*/