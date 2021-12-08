const colors = { // таблица цветов
  0: 'pink',
  1: 'red',
  2: 'yellow',
  3: 'green',
  4: 'blue',
  5: 'black',
  6: 'grey',
  7: 'GreenYellow',
  8: 'OrangeRed',
  9: 'SteelBlue',
  10: 'Magenta',
  11: 'Purple',
  12: 'DarkSlateGray',
  13: 'Indigo',
  14: 'DarkKhaki',
  15: 'DarkRed',
  16: 'DeepPink',
  17: 'LimeGreen',
  18: 'Aqua'
}



export function generateField(number) {

  const result = []

  for (let i = 0; i < number * number; i++) { // цикл генерации

    function findColor() {
      const color = Math.floor(Math.random() * (number * 3))
      const check = result.filter(el => el === colors[color]) // проверка массива на колличество цветов.
        if (check.length < 2) { // ограничение колличества каждого цвета. Не больше двух
          result.push(colors[color])
        } else {
          findColor()
        }
    }
    findColor()
  }
  return result
}

generateField(6)
