


async function show() {

    try {
        var res = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers");
      var data = await res.json();

      console.log(data);

      appendData(data.vouchers)


    } catch (err) {

        // console.log(err);

      }
      
    }

    show();

    let list = document.querySelector("#voucher_list")

    function appendData(data){


        data.map(function(ele,idx){

        let div = document.querySelector('.voucher')

        let name = document.createElement("p")
        name.src = ele.name;
    
        let img = document.createElement("img")
        img.src = ele.image;

        let price = document.createElement("p");
        price.innerText = ele.price;


        voucherFun(ele,idx)

            div.append(name, img, price);
    
            list.append(div)
        });
    };