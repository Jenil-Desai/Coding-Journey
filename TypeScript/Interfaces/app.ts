interface User {
  firstname: String;
  lastname: String;
  age: number;
  email?: String; //Optional Using "?"
}

function islegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log("Hi There " + user.firstname);
}

islegal({ firstname: "Jenil", lastname: "Desai", age: 19 });
