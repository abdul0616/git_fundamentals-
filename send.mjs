

function encrypt(data){
    return 'encrypted data'
}

function send(url, data){
    const encryptedData = encrypt(data)
    console.log(`sending encrypted ${encryptedData} to  ${url}`)
}


export {  
    send,
}