use std::collections::HashMap;

fn main() {
    let mut users: HashMap<String, u32> = HashMap::new();

    users.insert(String::from("Jenil"), 18);
    users.insert(String::from("Brijesh"), 19);

    let first_user_age = users.get("Jenil");

    match first_user_age {
        Some(age) => println!("Age Is {}", age),
        None => println!("User Not Found"),
    }
}
