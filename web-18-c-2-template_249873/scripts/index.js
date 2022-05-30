// Add the coffee to local storage with key "coffee"

async function show() {

    try {
    var res = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    
    
    // console.log('data:', coffee)
    

        var data = await res.json()

        console.log("coffee:", data.menu.data)

        var coffee = coffee.menu

        coffee.map(function(ele, idx){

            var menu = document.getElementById('menu')

            var div = document.createElement('div')

            var name = ele.title

            var image = ele.image
           

            var price = ele.price

            var addToBucket = document.createElement("button")

            addToBucket.id = 'add_to_bucket'

            addToBucket.innerText = "add to bucket"

            addToBucket.addEventListener('click', function () {
                bucketFun(ele, idx)
            });

            var img = document.createElement('img')

            
            img.src = image;

            var coffee_name = document.createElement('p')

            coffee_name.innerHTML = name;


            var coffee_price = document.createElement('p')

            coffee_price.innerHTML = price;



            div.append(img, coffee_name, coffee_price, addToBucket)

            menu.append(div)
            
            var goBucket = document.getElementById('goBucket');
            
            goBucket.addEventListener('click', function(){
                location.href="./bucket.html"
            });
        });
    }
    catch(err){

    }
}

function bucketFun(ele, idx){

    
    var count = document.getElementById('coffee_count')
    
    var arr = localStorage.getItem('coffee')
    
    if(arr == null){
        arr = []
    }
    else{
        arr = JSON.parse(localStorage.getItem('coffee'))
    }

    arr.push(ele)

    arr = localStorage.getItem('coffee',JSON.stringify(arr))

    count.innerHTML = JSON.parse(localStorage.getItem('coffee')).length;
}

show()
