export let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(myAdd(1, 2))

function compose<A, B, C>(f: (arg: A) => B, g: (arg: B) => C): (arg: A) => C {
  return (x) => g(f(x));
}

interface Box<T> {
  value: T;
}

function makeArray<T>(x: T): T[] {
  return [x];
}

function makeBox<U>(value: U): Box<U> {
  return { value };
}

const makeBoxedArray = compose(makeArray, makeBox);

const result = makeBoxedArray("hello!").value[0].toUpperCase();

console.log(result)
