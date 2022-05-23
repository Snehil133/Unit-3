

let inventory = JSON.parse(localStorage.getItem('products'))

inventory.map(function(elem,index){

    let div = document.createElement('div')

    let col = document.createElement('h3')
    col.innerText = elem.pumaType;

    let col1 = document.createElement('p')
    col1.innerText = elem.pumaDesc;

    let col2 = document.createElement('p')
    col2.innerText = elem.pumaPrice;

    let img = document.createElement('img')
    img.src = elem.pumaImage;

    let col4 = document.createElement('button')
    
    // button.setAttribute('#remove_product')
    
    col4.innerText = "Remove Product"
    
    col4.addEventListener("click",function(){
        
        div.innerHTML = ""
    
    });

    div.append(col,col1,col2,img,col4);

    document.getElementById('all_products').append(div);

});