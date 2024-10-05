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


const startApp =async()=>{
    try {
        console.log('tugas 1');
       const hasil = await penjumlahan(30, 10)
       console.log('berhasil', hasil);
       console.log('tugas 3');
    } catch (error) {
        console.log('gagal', error);
    }finally{
        console.log('aplikasi selsai');
    }
}


// const nilaiError = new Error("testing aja")
// console.log(nilaiError.message);
startApp()