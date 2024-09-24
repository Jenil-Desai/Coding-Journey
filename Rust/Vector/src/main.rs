fn main() {
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);
    vec.push(3);
    vec.push(4);
    vec.push(5);
    println!("{:?}", vec);
    println!("{:?}", event_filter(&vec));
    println!("{:?}", event_filter2(&mut vec));
}

fn event_filter(vec: &Vec<i32>) -> Vec<i32> {
    let mut new_vec = Vec::new();
    for val in vec {
        if val % 2 == 0 {
            new_vec.push(*val);
        }
    }
    return new_vec;
}

fn event_filter2(v: &mut Vec<i32>) -> &mut Vec<i32> {
    let mut i = 0;

    while i < v.len() {
        if v[i] % 2 != 0 {
            v.remove(i);
        } else {
            i += 1;
        }
    }
    return v;
}
