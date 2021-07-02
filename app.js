// // Capture User Input
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Print Dynamic Output
const printProfileData = profileDataArr => {
    // This...
    for(let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================')

    // forEach Method
   profileDataArr.forEach(profileItem => console.log(profileItem));
       
};

printProfileData(profileDataArgs);