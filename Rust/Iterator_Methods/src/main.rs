//Map | Filter | Collect

fn main() {
    let vec = vec![1, 2, 3, 4, 5];
    let vec_iter = vec.iter().filter(|x| *x % 2 == 1).map(|x| x * 2);
    let vec2: Vec<i32> = vec_iter.collect();
    println!("{:?}", vec2);
}
