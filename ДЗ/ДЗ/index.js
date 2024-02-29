for (let node of document.body.childNodes) {
    console.log(node); // нашла все узлы
}
let theParentBook = document.body.querySelectorAll('aside.books') [0];
console.log(theParentBook.childNodes) /*нашла детей узла*/
let the1Book = theParentBook.childNodes[3];
let the2Book = theParentBook.childNodes[1];
let the3Book = theParentBook.childNodes[9];
let the4Book = theParentBook.childNodes[7];;
let the5Book = theParentBook.childNodes[11];
let the6Book = theParentBook.childNodes[5];
theParentBook.insertBefore(the1Book, the2Book) /*меняем очередность*/
theParentBook.insertBefore(the3Book, the4Book)
theParentBook.insertBefore(the6Book, null)

// Меняем фоновое изображение
document.querySelector('body').style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Убираем рекламу
let advWindow = document.querySelector('.adv');
advWindow.remove()

//  Меняем заголовок книги 3
the3Book.children[0].innerHTML =  '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'

// Меняем порядок в книге 2
// Ищем детей в книге
console.log(the2Book.childNodes)
// определила, что список это 4 ребенок, нашла его узлы
console.log(the2Book.childNodes[3].childNodes)
let parent2Book = the2Book.childNodes[3]
let thePreface2Book = parent2Book.childNodes[3]
let theIntro2Book = parent2Book.childNodes[1]
parent2Book.insertBefore(thePreface2Book,theIntro2Book)
let theAppA2Book = parent2Book.childNodes[15]
let theAppB2Book = parent2Book.childNodes[19]
parent2Book.insertBefore(theAppA2Book,theAppB2Book)
let theAppC2Book = parent2Book.childNodes[5]
let theAppD2Book = parent2Book.childNodes[21]
parent2Book.insertBefore(theAppC2Book,theAppD2Book)
let the3Chapter2Book = parent2Book.childNodes[15]
let the2Chapter2Book = parent2Book.childNodes[12]
let the1Chapter2Book = parent2Book.childNodes[6]
let the4Chapter2Book = parent2Book.childNodes[8]
parent2Book.insertBefore(the3Chapter2Book,the4Chapter2Book)
parent2Book.insertBefore(the2Chapter2Book,the3Chapter2Book)

// Меняем порядок в 5 книге
let parent5Book = the5Book.childNodes[3]
console.log(parent5Book.childNodes) /*нашли детей*/
let the1Chapter5Book = parent5Book.childNodes[19];
let the2Chapter5Book = parent5Book.childNodes[7];
let the4Chapter5Book = parent5Book.childNodes[5];
let the5Chapter5Book = parent5Book.childNodes[13];
let theAppA5Book = parent5Book.childNodes[11];
let theAppB5Book = parent5Book.childNodes[17];
parent5Book.insertBefore(the1Chapter5Book, the2Chapter5Book) 
parent5Book.insertBefore(the4Chapter5Book, the5Chapter5Book) 
parent5Book.insertBefore(theAppA5Book, theAppB5Book) 


// Добавляем элемент в содержание книги 6
let parent6book = the6Book.childNodes[3]
console.log(parent6book.childNodes)
let the8Chapter6Book = document.createElement('li')
the8Chapter6Book.innerText = 'Глава 8: За пределами ES6'
parent6book.insertBefore(the8Chapter6Book,parent6book.childNodes[19])