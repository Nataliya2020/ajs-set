import { char1, char2, char3 } from '../Character';
import Team from '../Team';

test('Метод add добавляет персонажа в коллекцию', () => {
  const expectedObject = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  const team = new Team();
  team.add(char1);
  expect([...team.members][0]).toEqual(expectedObject);
});

test('Метод add должен выбросить ошибку если добавить уже существующего в коллекции персонажа', () => {
  const team = new Team();
  team.add(char1);
  expect(() => team.add(char1)).toThrow();
});

test('Метод addAll должен добавлять несколько персонажей в коллекцию', () => {
  const team = new Team();
  team.addAll(char1, char2, char3);
  expect(team.members.size).toBe(3);
});

test('Метод addAll должен добавлять несколько персонажей в коллекцию, если их некоторые поля имеют одиннаковые значения', () => {
  const char4 = {
    name: 'Alex',
    type: 'Swordman',
    health: 100,
    level: 2,
  };
  const team = new Team();
  team.addAll(char1, char2, char3, char4);
  expect(team.members.size).toBe(4);
});

test('Метод addAll не должен добавлять дублирующих персонажей в коллекцию', () => {
  const team = new Team();
  team.addAll(char1, char2, char2, char3);
  expect(team.members.size).toBe(3);
});

test('Метод toArray должен возвращать массив персонажей', () => {
  const team = new Team();
  team.addAll(char1, char2, char3);
  expect(team.toArray()).toBeInstanceOf(Array);
});
