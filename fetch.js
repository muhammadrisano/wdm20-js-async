// async await
// const startApp = async()=>{
// try {
//     const response = await fetch('https://jsonplaceholder.typicodes.com/posts')
//     const result = await response.json()
//     console.log(result);

// } catch (error) {
//     console.log('terjadi eror nih');
//     console.log(error);
// }
// }
// startApp()

// then catch

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     res.json()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
  return res.json()
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})