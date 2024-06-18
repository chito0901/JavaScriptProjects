function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-="

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(Password must be atlease 8 characters)`;
    }
    if( allowedChars.length === 0){
        return `(Atlease 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++ ){
        const randommIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randommIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated password: ${password}`);