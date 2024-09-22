fn main() {
    let a: i32 = 10;
    let b: i32 = 20;
    let result: i32 = sum(a, b);
    println!("a = {} | b = {} | sum = {}", a, b, result);
}

pub fn sum(a: i32, b: i32) -> i32 {
    return a + b;
}
