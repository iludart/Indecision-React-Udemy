function getFirstName(fullName) {
    return fullName.split(' ')[0];
} 

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Peter Penev'));