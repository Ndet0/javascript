
function checkSpeed(speed) {
    //// Define the speed limit (70 km/h)
    const speedLimit = 70;
     // Number of km/h over the limit that equals 1 demerit point
    const kmPerPoint = 5;
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }
     // Calculate the number of demerit points:
    // Subtract the speed limit from the actual speed,
    // divide by 5 (kmPerPoint), and round down to the nearest whole numbe
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}
// Example usage:
checkSpeed(80);  // Output: Points: 2
checkSpeed(130); // Output: License suspended
checkSpeed(65);  // Output: Ok
checkSpeed(200);