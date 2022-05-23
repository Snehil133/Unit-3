//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener('submit',form);

let data = JSON.parse(localStorage.getItem('data')) || []

function form(event){
    event.preventDefault()

    let type = document.getElementById('type').value;
    let desc = document.getElementById('desc').value
    let price = document.getElementById('price').value
    let image = document.getElementById('image').value

    let products = {
        pumaType: type,
        pumaDesc: desc,
        pumaPrice: price,
        pumaImage: image,
    };

    data.push(products)
    // console.log(data)

    localStorage.setItem('products', JSON.stringify(data))
}