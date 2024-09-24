fn main() {
    let name = String::from("Jenil Desai");
    let ans = find_first_word(&name);
    println!("{}", name);
    println!("{}", ans);
}

fn find_first_word(word: &String) -> &str {
    let mut space_index = 0;
    for i in word.chars() {
        if i == ' ' {
            break;
        }
        space_index += 1;
    }
    return &word[0..space_index];
}
