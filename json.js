// fetch('product.json')
//     .then(res =>{
//         if(!res.ok){
//             console.log("Something went wrong")
//         }
//     return res.json()
//     })
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(err =>{
//         console.log(err)
//     })

async function fetchJson (){
    data = await(fetch('product.json'))
    jsonData = await(data.json())
    console.log(jsonData)
}
fetchJson()