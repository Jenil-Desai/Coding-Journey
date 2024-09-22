use rand::{thread_rng, Rng};

fn main() {
    let mut rng = thread_rng();
    let n: u32 = rng.gen();
    println!("Random number: {}", n);
}
