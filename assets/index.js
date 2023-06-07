function check(){
             var nbr;
             nbr = Number(document.getElementById("age").value);
             if(nbr < 18)
             {
                alert("You are not an adult");
             }
             else
             {
                alert("You are an adult");
             }
         }
