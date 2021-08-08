// Calculate Page Requirment using Function
function pageRequirments(firstBook, secondBook, thirdBook) {
    let firstBookPaper = 100;
    let secondBookPaper = 200;
    let thirdBookPaper = 300;

    let firstBookPaperNeed = firstBook * firstBookPaper;
    let secondBookPaperNeed = secondBook * secondBookPaper;
    let thirdBookPaperNeed = thirdBook * thirdBookPaper;

    let totalPaperNeed = firstBookPaperNeed + secondBookPaperNeed + thirdBookPaperNeed;
    return totalPaperNeed;
}

console.log(pageRequirments(5, 1, 1));