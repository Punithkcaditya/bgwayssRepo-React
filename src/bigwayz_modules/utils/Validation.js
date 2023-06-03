/* To handle first name validation*/
export function validateName(name) {
    var nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
    var name = name.trim();
  
    if (name == "" || name == undefined || name == null) {
        return { status: false, error: "*Please enter your name"};
    }
    else if (!nameRegex.test(name)) {
        return { status: false, error: "*Please provide valid name" };
    }
    else if (name.length < 2) {
        return { status: false, error: "*Please provide valid name" }
    }
    else {
        return { status: true, error: '' };
    }
}

/* To handle email validation */
export function validateEmail(email) {
     var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    email = email.trim();
    if (email == "" || email == undefined || email == null) {
        return { status: false, error: "*Please enter email address." };
    }
    else if (!emailRegex.test(email)) {
        return { status: false, error: "*Please enter valid email address." };
    }
    else {
        return { status: true, error: '' };
    }
}
/* To validate password */

export function validatePassword(password) {
    // var passwordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{16,}$/;
   // var passwordRegex = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    // var passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var passwordRegex =   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    password = password.trim();

    if (password == "" || password == undefined || password == null) {
        return { status: false, error: "Please enter valid password." }
    } 
    // else if (!passwordRegex.test(password)) {
    //     return { status: false, error: "Please enter valid password." };
    // }
    else if (password.length < 6) {
        return { status: false, error: "Password must have at least 6 characters with at least one Capital letter, at least one lower case letter and at least one number." };
    }
    // else if(password.length > 8||password.length ==8){
    //     return { status: false, error: "Passwocters." };
    // }
    else if(!passwordRegex.test(password)){
        return{ status:false,error:"Password must have at least 6 characters with at least one Capital letter, at least one lower case letter and at least one number."}
    }
    else {
        return { status: true, error: '' }
    }
}

/* To validate Mobile No. */

export function validateMobileNo(mobileNo) {
    var numberRegex = /^[+][1-9][0-9]{7,18}$/;
    mobileNo = mobileNo.trim()
    if (mobileNo == "" ) {
        return { status: true, error: "" }
    }
    if (mobileNo == "" || mobileNo == undefined || mobileNo == null) {
        return { status: false, error: "*Please enter phone number." }
    }else if(!numberRegex.test(mobileNo)){
        return { status: false, error: "*Please enter valid phone number (+1XXXXXXXXXX)." }
    }else {
        return { status: true, error: '' }
    }
}

export function validateMobileNo1(mobileNo) {
    var numberRegex = /^[0-9][0-9]{7,20}$/;
    mobileNo = mobileNo.trim()
    if (mobileNo == "" ) {
        return { status: true, error: "" }
    }
    if ( mobileNo == undefined || mobileNo == null) {
        return { status: false, error: "*Please enter phone number." }
    }else if(!numberRegex.test(mobileNo)){
        return { status: false, error: "*Please enter valid phone number." }
    }else {
        return { status: true, error: '' }
    }
}

export function validateWeight(weight) {
    var numberRegex = /^((?!(0))[0-9]{2,3})$/g;
    weight = weight.trim();
    if (weight == "" || weight == undefined || weight == null) {
        return { status: false, error: "Please enter weight" }
    }else if(!numberRegex.test(weight)){
        return { status: false, error: "Please enter valid weight" }
    }else {
        return { status: true, error: '' }
    }
}

export function validateGoals(goals) {
    var numberRegex = /^((?!(0))[0-9]{2,3})$/g;
    goals = goals.trim();
    if (goals == "" || goals == undefined || goals == null) {
        return { status: false, error: "Please enter your daily goal limit" }
    }else if(!numberRegex.test(goals)){
        return { status: false, error: "Please enter valid goal limit" }
    }else {
        return { status: true, error: '' }
    }
}
