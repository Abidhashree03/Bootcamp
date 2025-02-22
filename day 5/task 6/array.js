const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 }
];

const filterUsersByAge = (users, ageLimit) => {
    return users.filter(user => user.age > ageLimit);
};

const filteredUsers = filterUsersByAge(users, 25);
console.log(filteredUsers);
