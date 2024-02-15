
async function users() {
    const response = await fetch("https://reqres.in/api/users?per_page=54");
    const dataArray = await response.json();

    console.log('-----------');
    console.log('Пункт №1:')
    console.log('-----------');

    const newArr = dataArray.data.map((i) => i.last_name)
    console.log(newArr)

    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');

    const filtered = newArr.filter(arr => arr.match(/F/i))
    console.log(filtered)

    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');

    let newArr2 = dataArray.data.reduce((acc, user) => acc + ' ' + user.first_name + ' ' + user.last_name + ",", ' ') 
    newArr2 = newArr2.slice(0, -1)
    console.log(`Наша база содержит данные следующих пользователей: ${newArr2}.`)
   
    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');

    console.log(Object.keys(dataArray.data[0]))
  }
users()
