fn create_string() {
    let str1 = String::from("Hello World");
    print_str(&str1);
    println!("{}", str1);
}

fn main() {
    create_string();
}

fn print_str(str: &String) {
    println!("{}", str)
}
