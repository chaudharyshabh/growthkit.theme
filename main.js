{
    let counts1 =setInterval(updated);
    let upto=0;
    function updated(){
        var count= document.getElementById("number1");
        count.innerHTML=++upto;
        if(upto===100)
        {
            clearInterval(counts1);
        }
    }
    
  }
   {
    let counts2 =setInterval(updated);
    let upto=0;
    function updated(){
        var count= document.getElementById("number2");
        count.innerHTML=++upto;
        if(upto===100)
        {
            clearInterval(counts2);
        }
    }
   }
   {
    let counts3 =setInterval(updated);
    let upto=0;
    function updated(){
        var count = document.getElementById("number3");
        count.innerHTML=++upto;
        if(upto===100)
        {
            clearInterval(counts3);
            counts3 = setInterval(timeer, 50);
        }
    }
   }
   {
    let counts4 =setInterval(updated);
    let upto=0;
    function updated(){
        var count= document.getElementById("number4");
        count.innerHTML=++upto;
        if(upto===100)
        {
            clearInterval(counts4);
        }
    }
   }