import GameSavingLoader from '../GameSavingLoader';
import json from '../parser';
import read from '../reader';

describe('Начинаем тестирование класса GameSavingLoader', () => {
  describe('Тестируем метод load:', () => {
    test('Должен вернуть json-format строку', () => {
      const savingData = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

      expect(GameSavingLoader.load()).resolves.toBe(savingData);
    });
  });
});

describe('Начинаем тестирование функции json', () => {
  test('Должен вернуть json-format строку', async () => {
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

    const buffer = await read();

    await expect(json(buffer)).resolves.toBe(expected);
  });
});
