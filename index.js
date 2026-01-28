function add(x, y) {
  return x + y;
}

function sub(a, b) {
  if (!(a > b)) throw new Error("A should be greater than B")
  return a - b;
}

add(5, 5);
add(4, 10);
add(5,9);

sub(10,5);
