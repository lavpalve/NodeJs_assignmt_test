const userProfileValidation = require('./userProfileSchema');

const verifyUserProfile = (userData)=>{
    //console.log(userData);
    return userProfileValidation.validate(userData);
}

module.exports = verifyUserProfile;