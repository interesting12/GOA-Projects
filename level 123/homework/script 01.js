function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), 2000);
    }).catch(error => console.log(error));
}