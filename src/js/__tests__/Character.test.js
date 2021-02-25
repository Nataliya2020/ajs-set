import Character from '../Character';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Ibrahim', 'Bowman')).toEqual(expectedObject);
});
test('Проверяем что класс выбрасывает ошибку если имя содержит меньше 2 символов', () => {
  expect(() => new Character('I', 'Bowman')).toThrowError();
});
test('Проверяем что класс выбрасывает ошибку если имя содержит больше 10 символов', () => {
  expect(() => new Character('Ifdsfsdsdfsdf', 'Bowman')).toThrowError();
});
test('Проверяем что класс выбрасывает ошибку передать некорректный тип персонажа', () => {
  expect(() => new Character('Ibrahim', 'Killer')).toThrowError();
});
