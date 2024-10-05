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


const startApp = async()=>{
    console.log('tugas 1');
    const hasil =  await penjumlahan(20, 10)
    console.log(hasil);
    console.log('tugas 3');
}
startApp()