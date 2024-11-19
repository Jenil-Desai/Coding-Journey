fn main() {
    let num = 1;
    println!("{}", fib(num));
}

fn fib(num: u32) -> u32 {
    let mut first = 0;
    let mut second = 1;

    if num == 0 {
        return first;
    }

    if num == 1 {
        return second;
    }

    for _i in 0..num - 2 {
        let temp = second;
        second = second + first;
        first = temp;
    }
    return second;
}