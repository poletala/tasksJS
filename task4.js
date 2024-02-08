function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let randomNumber = getRandomNumber(1, 10)
console.log(randomNumber)


function guessGame() {
    let userNumber = prompt('Угадай число от 1 до 10');
    if (userNumber === null || userNumber === '') {
        alert ('Игра окончена')
    }
    else if (userNumber > randomNumber) {
        alert ('Загаданное число меньше')
        guessGame()
    }
    else if (userNumber < randomNumber) {
        alert ('Загаданное число больше')
        guessGame()
    }
    else if (isNaN(userNumber)) {
        alert ('Введи число!')
        guessGame()
    }
    else {alert("Поздравляю, Вы угадали!!!")
    }
}

guessGame()
