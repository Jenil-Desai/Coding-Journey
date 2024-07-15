enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function Game(KeyPressed: Direction) {
  if (KeyPressed == Direction.Up) {
    // Do Something
  }
}

Game(Direction.Up);
