struct Rect {
    width: u32,
    height: u32,
}

impl Rect {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn perimeter(&self) -> u32 {
        2 * self.area()
    }
}

fn main() {
    let rec = Rect {
        width: 30,
        height: 50,
    };
    println!("Area Of Rectangle : {}", rec.area());
    println!("Perimeter Of Rectangle : {}", rec.perimeter());
}
