export const checkValidData=(email,password,fullname)=>{
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullname);
    if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    
    return null;
};
 
