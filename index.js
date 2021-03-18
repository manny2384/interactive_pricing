window.onload = ()=>{
    let price = document.getElementById("new_price");
    let slider = document.getElementById("range");
    let pages_per_read = document.getElementById("pages_per_read");
    let subscription_type = 0;
    let discount = 1;

    slider.oninput = function(){
        let new_price = price.value;
        let pages = 0;
        console.log(new_price);
        switch(parseInt(this.value, 10)){
            case 1:
                new_price = 8.00 * discount;
                pages = "10k";
                break;
            case 2:
                new_price = 12.00 * discount;
                pages = "50k";
                break;
            case 3:
                new_price = 16.00 * discount;
                pages = "100k";
                break;
            case 4:
                new_price = 24.00 * discount;
                pages = "500k";
                break;
            case 5:
                new_price = 36.00 * discount;
                pages = "1M"
                break;
            default:
                break;

        }
        pages_per_read.innerHTML = pages;
        price.innerHTML = new_price.toFixed(2);
        
    }

    document.getElementById("month").addEventListener("click", ()=>{
        if(!subscription_type){
            document.getElementById("month").disabled = true;
            document.getElementById("month").checked = true;

        }
        else{
            subscription_type = 0;
            document.getElementById("year").disabled = false;
            document.getElementById("year").checked = false;
            price.innerHTML = (price.innerHTML/discount).toFixed(2);
            discount = 1;
        }

    });

    document.getElementById("year").addEventListener("click", ()=>{
        if(subscription_type){
            document.getElementById("year").disabled = true;
            document.getElementById("year").checked = true;
        }
        else{
            subscription_type = 1;
            discount = 0.75;
            document.getElementById("month").disabled = false;
            document.getElementById("month").checked = false;
            price.innerHTML = (price.innerHTML * discount).toFixed(2);
        }
    });

};