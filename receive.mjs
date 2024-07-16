function decrypt(data){
    return 'decrypted data'
}


function read(){
    return decrypt('data')
}

function log(data){
    console.log(data)
}

export {
    read,
    decrypt,
    log
}