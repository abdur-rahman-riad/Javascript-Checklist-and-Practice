// You Have 2 condition. You Have to Write Code for At Least One Condition True, Both Condition

const marks1 = 80;
const marks2 = 75;
const marks3 = 60;

if (marks1 >= 80 && marks1 <= 100) {
    console.log("Engineering Confirm");
}
else if ((marks2 > 70 && marks2 < 80) || (marks3 >= 60 && marks3 < 70)) {
    console.log("Do Hard Work");
}
else {
    console.log("Engineering Cancel");
}