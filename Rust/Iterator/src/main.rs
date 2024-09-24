fn main() {
    let mut num = vec![1, 2, 3, 4, 5];

    let num_iter = num.iter();
    for val in num_iter {
        println!("Got : {val}")
    }

    let mut num_iter_mut = num.iter_mut();
    // for val in num_iter_mut {
    //     *val = *val + 1;
    // }
    // println!("{:?}", num);

    while let Some(val) = num_iter_mut.next() {
        println!("Got : {val}");
    }
}
