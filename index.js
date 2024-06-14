function isValidEmail(email){
    if(email.includes("@gmail.com")){
        console.log(`The ${email} is valid.`)
    } else {
        console.log(`Invalid email! Try again`)
    }
}

isValidEmail("validchecker@yahoo.com");