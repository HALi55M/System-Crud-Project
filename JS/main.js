
let nameProductInput = document.getElementById('nameProductInput');
let priceProductInput = document.getElementById('priceProductInput');
let CategoryProductInput = document.getElementById('CategoryProductInput');
let descriptionProductInput = document.getElementById('descriptionProductInput');
let productContainer ;
let upDateBtn = document.getElementById('upDateBtn') ;
let addBtn = document.getElementById('addBtn') ;


if (localStorage.getItem ('myProducts') != null){

    productContainer = JSON.parse(localStorage.getItem ('myProducts'));
    displayProduct (productContainer);
}
else{
   productContainer=[];
}
function addProduct()
{
    if(nameProductInput !=""){
        alert("Product name is required");
        return false;
    }
    
    let product = {
        name:nameProductInput.value,
        price:priceProductInput.value,
        category:CategoryProductInput.value,
        desc:descriptionProductInput.value
    }
     productContainer.push(product);
     localStorage.setItem( 'myProducts',JSON.stringify(productContainer));
     clearForm(); 
     displayProduct(productContainer);
     upDateBtn.classList.add('d-none');
     addBtn.classList.replace('d-none' , 'd-inline-block')
}
function clearForm(){

    nameProductInput.value  = "";
    priceProductInput.value  = "";
    CategoryProductInput.value = "";
    descriptionProductInput.value    = "";
}
function displayProduct(list) {
let container =``;
for( let i= 1 ; i< list.length ; i++ ){
       
    container +=` <tr> 
    <td>${i}</td>
    <td class="bg-warning">${list[i].name}</td> 
    <td class="bg-danger">${list[i].price }</td>
    <td>${list[i].category}</td>
    <td>${list[i].desc}</td>
    <td> <button onclick="setUpdate(${i});" class="btn  btn-outline-warning">Update</button></td>
    <td> <button onclick="deleteProduct(${i});" class="btn  btn-outline-danger">Delete</button></td>
</tr>  `
}
document.getElementById('tableBody').innerHTML= container;
}
 function searchProduct(userSearch){
    let searchResult =[];
    for ( let i =0 ; i<productContainer.length ; i++){

        if( productContainer[i].name.toLowerCase().includes(userSearch.toLowerCase())== true)
        {
            searchResult.push(productContainer[i])
        }
    }
    displayProduct(searchResult);
 }
 function deleteProduct (deleteIndex){
     if(!confirm("Are you sure to delete product?"))
     {
          return true;
     }
    productContainer.splice( deleteIndex,1);
    localStorage.setItem('myProducts',JSON.stringify(productContainer));
     displayProduct (productContainer);
 }
 function setUpdate(upDateIndex){
     nameProductInput.value = productContainer[upDateIndex].name;
     priceProductInput.value = productContainer[upDateIndex].price;
     CategoryProductInput.value = productContainer[upDateIndex].category;
     descriptionProductInput.value = productContainer[upDateIndex].desc;
    upDateBtn.classList.replace('d-none' , 'd-block');
    addBtn.classList.add('d-none');
    deleteProduct(upDateIndex);
    }
 
















