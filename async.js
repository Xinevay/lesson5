// Функция ожидания

// const sleep = (ms) => {
//     const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// };



// Приготовление ужина

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const cookDinner = async() => {
//     console.log("Включаю плиту...");
//     await sleep(1000);

//     console.log("Режу овощи...");
//     await sleep(2000);

//     console.log("Варю суп...");
//     await sleep(3000);

// };

// cookDinner();



//Обратная сбоя

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const cookDinner = async() => {
    try{
        console.log("Проверяю газ...");
        await sleep(1000);
        const isGasOn = true;
        if (!isGasOn) throw new Error("Нет газа!");

            console.log("Включаю плиту...");
            await sleep(1000);

            console.log("Режу овощи...");
            await sleep(2000);

            console.log("Варю суп...");
            await sleep(3000);
    }catch (err) {
        console.log("Ошибка на кухне: ", "Нет газа!");
    }
};

cookDinner();