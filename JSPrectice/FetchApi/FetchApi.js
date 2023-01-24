
let select = document.getElementById("Apidata");

 
        
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json =>{

            let data = json.products
            data.map((value)=>{
                let option = document.createElement("option");
                option.innerText = value.title
                select.appendChild(option);
            })
            
        } )

