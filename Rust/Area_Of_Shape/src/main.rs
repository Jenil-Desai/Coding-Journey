enum Shape {
    Circle(f64),
    Sqaure(f64),
    Rectangle(f64, f64),
}

fn main() {
    let circle = Shape::Circle(5.0);
    let sqaure = Shape::Sqaure(4.0);
    let rectangle = Shape::Rectangle(3.0, 6.0);
    println!("Area Of Circle : {}", calculate_area(circle));
    println!("Area Of Sqaure : {}", calculate_area(sqaure));
    println!("Area Of Rectangle : {}", calculate_area(rectangle));
}

fn calculate_area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(radius) => 3.14 * radius * radius,
        Shape::Sqaure(side) => side * side,
        Shape::Rectangle(width, height) => width * height,
    }
}
