const cipher = (str, num) => {
    let result = '';
    let charcode = 0;

    for (let i = 0; i < str.length; i++) {
        charcode = str.charCodeAt(i);
        if (checkIfLetter(charcode)) {
            charcode += num
            if (!checkIfLetter(charcode)) {
                num > 0 ? charcode -= 26 : charcode += 26
            }
            result += String.fromCharCode(charcode);
        } else {
            result += str[i]
        }
    
    }
    return result;
}

const checkIfLetter = charcode => (charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122) 

export default cipher