function login(){
    let NISN = document.getElementById('inputnisn').value
    let pass = document.getElementById('inputPassword').value

    console.log('inputnisn', NISN)
    console.log('inputPassword', pass)

    if(!nisnval(NISN)){
        alert("NISN harus berisi 12 angka")
    } 
    else if(!alphanum(pass)){
        alert("password harus mengandung huruf dan angka")
    }
    event.preventDefault()
}

function alphanum(str){
    let char = 0
    for(let i = 0; i < str.length; i++){
        if('A' <= str[i] && str[i] <= 'Z'){
            char++
        }
        else if('a' <= str[i] && str[i] <= 'z'){
            char++
        }
        else{
            return false
        }
    }
    if(num != 0 && char != 0){
        return true
    }
    return false
}

function nisnval(str){
    if(str.length < 12 || str.length > 12){
        return false
    }

    for(let i = 0; i < str.length; i++){
        if('A' <= str[i] && str[i] <= 'Z'){
            char++
        }
        else if('a' <= str[i] && str[i] <= 'z'){
            char++
        }
        else{
            return false
        }
    }
    if(char != 0){
        return true
    }
    return false
}
document.getElementById("loginbtn").addEventListener('click', login)