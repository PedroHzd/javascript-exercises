const date = new Date();

const findTheOldest = function(array) {
    let age = array.map((people) => {
        if (people.yearOfDeath === undefined) {
            people.yearOfDeath = date.getFullYear();
        }
        return people.yearOfDeath - people.yearOfBirth;
    });

    let theOldest = Math.max(...age);
    let index = age.findIndex(year => year === theOldest);
    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
