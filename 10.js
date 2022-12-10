const input = `addx 1
addx 4
addx 21
addx -20
addx 4
noop
noop
addx 5
addx 3
noop
addx 2
addx 1
noop
noop
addx 4
noop
noop
noop
addx 3
addx 5
addx 2
addx 1
noop
addx -37
addx 22
addx -4
addx -14
addx 2
addx 5
addx 3
addx -2
addx 2
addx 5
addx 2
addx -15
addx 32
addx -14
addx 5
addx 2
addx 3
noop
addx -13
addx -2
addx 18
addx -36
noop
addx 11
addx -7
noop
noop
addx 6
addx 22
addx -21
addx 3
addx 2
addx 4
noop
noop
noop
addx 5
addx -16
addx 17
addx 2
addx 5
addx -11
addx 15
addx -15
addx -24
noop
noop
addx 7
addx 2
addx -6
addx 9
noop
addx 5
noop
addx -3
addx 4
addx 2
noop
noop
addx 7
noop
noop
noop
addx 5
addx -28
addx 29
noop
addx 3
addx -7
addx -29
noop
addx 7
addx -2
addx 2
addx 5
addx 2
addx -3
addx 4
addx 5
addx 2
addx 8
addx -30
addx 25
addx 7
noop
noop
addx 3
addx -2
addx 2
addx -10
addx -24
addx 2
noop
noop
addx 2
noop
addx 3
addx 2
noop
addx 3
addx 2
addx 5
addx 2
noop
addx 1
noop
addx 2
addx 8
noop
noop
addx -1
addx -9
addx 14
noop
addx 1
noop
noop`
    .split('\n')
    .map(row => row.split(' '));

const xAt = [undefined, 1]; // 1-indexed
xAt.last = () => xAt[xAt.length - 1];

input.forEach(([_, arg]) => {
    xAt.push(xAt.last());
    if (arg) xAt.push(xAt.last() + +arg);
});

console.log(
    [20, 60, 100, 140, 180, 220].map(cycle => xAt[cycle] * cycle).reduce((a, b) => a + b)
);

const screen = [...new Array(6)].map(_ => [...new Array(40)])
    .map((row, i) => row.map((_, j) => {
        const cycle = (i * row.length) + (j + 1);
        return Math.abs(xAt[cycle] - j) < 2 ? '█' : ' ';
    }));

console.log(
    screen.map(row => row.join('')).join('\n')
);

