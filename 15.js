const input = `Sensor at x=3291456, y=3143280: closest beacon is at x=3008934, y=2768339
Sensor at x=3807352, y=3409566: closest beacon is at x=3730410, y=3774311
Sensor at x=1953670, y=1674873: closest beacon is at x=2528182, y=2000000
Sensor at x=2820269, y=2810878: closest beacon is at x=2796608, y=2942369
Sensor at x=3773264, y=3992829: closest beacon is at x=3730410, y=3774311
Sensor at x=2913793, y=2629579: closest beacon is at x=3008934, y=2768339
Sensor at x=1224826, y=2484735: closest beacon is at x=2528182, y=2000000
Sensor at x=1866102, y=3047750: closest beacon is at x=1809319, y=3712572
Sensor at x=3123635, y=118421: closest beacon is at x=1453587, y=-207584
Sensor at x=2530789, y=2254773: closest beacon is at x=2528182, y=2000000
Sensor at x=230755, y=3415342: closest beacon is at x=1809319, y=3712572
Sensor at x=846048, y=51145: closest beacon is at x=1453587, y=-207584
Sensor at x=3505756, y=3999126: closest beacon is at x=3730410, y=3774311
Sensor at x=2506301, y=3745758: closest beacon is at x=1809319, y=3712572
Sensor at x=1389843, y=957209: closest beacon is at x=1453587, y=-207584
Sensor at x=3226352, y=3670258: closest beacon is at x=3730410, y=3774311
Sensor at x=3902053, y=3680654: closest beacon is at x=3730410, y=3774311
Sensor at x=2573020, y=3217129: closest beacon is at x=2796608, y=2942369
Sensor at x=3976945, y=3871511: closest beacon is at x=3730410, y=3774311
Sensor at x=107050, y=209321: closest beacon is at x=1453587, y=-207584
Sensor at x=3931251, y=1787536: closest beacon is at x=2528182, y=2000000
Sensor at x=1637093, y=3976664: closest beacon is at x=1809319, y=3712572
Sensor at x=2881987, y=1923522: closest beacon is at x=2528182, y=2000000
Sensor at x=3059723, y=2540501: closest beacon is at x=3008934, y=2768339`.split('\n');


const coord = str => {
    let x, y;
    eval(str);
    return {x, y};
};

const dst = (p1, p2) => Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);

const sensors = [];
input.forEach(row => {
    const [, sensor, beacon] = row.match(/Sensor at (.*?): closest beacon is at (.*)/);
    sensors.push({...coord(sensor), beacon: coord(beacon), d: dst(coord(sensor), coord(beacon))})
});



// Part 1
const excluded = {};
const ROW = 2000000;
excluded[ROW]  = new Set();
sensors.forEach(sensor => {
    const d = dst(sensor, sensor.beacon);
    const dy = Math.abs(sensor.y - ROW);
    for (let dx = 0; dx <= d - dy; dx++) {
        excluded[ROW].add(sensor.x + dx);
        excluded[ROW].add(sensor.x - dx);
    }
});
sensors.map(s => s.beacon).forEach(({x, y}) => excluded[y]?.delete(x));
console.log(excluded[ROW]);

// Part 2
ys: for (let y = 0; y <= 4000000; y++) {
    console.log(y);
    xs: for (let x = 0; x <= 4000000; x++) {
        for (let sensor of sensors) {
            if (sensor.d >= dst(sensor, {x, y})) {
                x = sensor.x + (sensor.d - Math.abs(sensor.y - y)); // ffwd x to rightmost point on this row covered by this sensor
                continue xs;
            }
        }
        console.log(x * 4000000 + y);
        break ys;
    }
}


