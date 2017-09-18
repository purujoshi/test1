

    var total = 0;
    var prices = [31276];
    var paytm = 40;
    var fc = 70;
    var door = 90;
    var del = 0;
    var pay = 0;


    function change()
    {
        var p = document.getElementById('item1').index;
        document.getElementById('price1').innerHTML = prices[i];
    }
   

    function calc() {
 
        var quantity = document.getElementsByName("quantity");
        for(let l = 0; l < quantity.length; l++)
        {
            if(quantity[l].checked) 
            total = total + prices*(l+1);
        }
        var pay = document.getElementsByName("payment");
        for(let l = 0; l < pay.length; l++)
        {
            if(pay[l].checked) 
            { pay = 40*l;
            total = total + pay;
        } }
    
        var door = document.getElementsByName("door");
        if(door[0].checked) { del = 130;
            total = total + del; }    
    
        document.getElementById('sitem').innerHTML = document.getElementById('item1').value;
        document.getElementById('sprice').innerHTML = prices;
        document.getElementById('sdel').innerHTML = del;
        document.getElementById('stotal').innerHTML = total;
        document.getElementById('spayment').innerHTML = pay;

        }    
 

