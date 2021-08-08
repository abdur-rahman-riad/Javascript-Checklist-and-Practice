function bestFriend(friend) {
    let max = 0;
    let largestString;
    for (let i = 0; i < friend.length; i++) {
        console.log(friend[i], friend[i].length);
        if (friend[i].length > max) {
            max = friend[i].length;
            largestString = friend[i];
        }
    }
    console.log("Largest String: " + largestString + " & Length is: " + max);
    // return largestString;
}
friendList = ["Riad Rahman", "Mohammad Abdur Rahman", "Mohammad", "Rahman"];
console.log(bestFriend(friendList));




/* // Print Largets String from an Array using Function
function bestFriend(friend) {
    let max = 0;
    let largestString;
    for (let i = 0; i < friend.length; i++) {
        if (friend[i].length > max) {
            largestString = friend[i];
        }
        console.log(friend[i], friend[i].length);
    }
    console.log("Largets Name Have: " + largestString + " Character");
}
friendList = ["Riad", "Abdur", "Mohammad", "Rahman"];
console.log(bestFriend(friendList)); */