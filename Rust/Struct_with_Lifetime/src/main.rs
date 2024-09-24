struct User<'a> {
    name: &'a str,
}

fn main() {
    let user;
    {
        let name = String::from("Jenil");
        user = User { name: &name };
        println!("{}", user.name); //Works Here becuz Lifetime of user's name is in the scope
    }
    // println!("{}", user.name); does not work as user's name isn't in the scope
}
