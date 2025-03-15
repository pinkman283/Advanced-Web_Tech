const abs = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am shihab");
        }, 2000);
    });
};

const Data = async () => {
    console.log("hellooo");
    const result = await abs();
    console.log(result); 
}
Data()
