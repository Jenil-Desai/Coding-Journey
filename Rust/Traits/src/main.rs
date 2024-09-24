trait Summary {
    fn summarise(&self) -> String;
}

struct User {
    name: String,
    age: u32,
}

impl Summary for User {
    fn summarise(&self) -> String {
        return format!("The Name Is {} and Age is {}", self.name, self.age);
    }
}

fn main() {
    let user = User {
        name: String::from("Jenil Desai"),
        age: 18,
    };

    println!("{}", user.summarise());
}
