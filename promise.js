// const penjumlahan = (val1, val2)=>{
//     setTimeout(()=>{
//         const hasil = val1 + val2
//         return hasil
//     }, 2000)
// }

// const hasil = penjumlahan(20, 10)
// console.log(hasil);

// const penjumlahan = (val1, val2, callback)=>{
//     setTimeout(()=>{
//         const hasil = val1 + val2
//         callback(hasil)
//     }, 2000)
// }

// const pengurangan = (val1, val2, callback)=>{
//     setTimeout(()=>{
//         const hasil = val1 - val2
//         callback(hasil)
//     }, 2000)
// }


// penjumlahan(20, 10, (total)=>{
//     pengurangan(total, 15, (hasil)=>{
//         console.log(hasil);
//     })
// })


// promise
const penjumlahan = (val1, val2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof(val1)!== 'number' || typeof(val2) !== 'number'){
                reject('maaf semua parameter harus number')
                return
            }
            const hasil = val1 + val2
            resolve(hasil)
            // reject('terjadi error nih...')
        }, 2000)
    })
}

penjumlahan('ab', 20)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
