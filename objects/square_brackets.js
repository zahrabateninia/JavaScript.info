let user = {
    name: "Zahra",
    age: 22,
};

key = prompt("What do you wanna know about the user?", "name");

alert(user[key]); 
// alert(user.key) returns undefined!