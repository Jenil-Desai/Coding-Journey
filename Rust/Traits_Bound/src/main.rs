trait Summary {
    fn summarise(&self) -> String;
}

trait Fix {
    fn fixer(&self) {
        return println!("Fixing");
    }
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

impl Fix for User {}

fn main() {
    let user = User {
        name: String::from("Jenil Desai"),
        age: 18,
    };
    test_trait_bound(user);
}

fn test_trait_bound<T: Summary + Fix>(data: T) {
    println!("{}", data.summarise());
    data.fixer()
}
