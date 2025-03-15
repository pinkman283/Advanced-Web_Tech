const data = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = true;
            if (a) {
                resolve("The answer is true");
            } else {
                reject("The answer is rejected");
            }
        }, 2000);
    });
};

data()
    .then(msg => console.log(msg)) 
    .catch(error => console.log(error));
