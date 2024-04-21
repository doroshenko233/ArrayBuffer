import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Загрузка данных в буфер', () => {
   const convertibleData = new ArrayBufferConverter();
   convertibleData.load(getBuffer());
   expect(convertibleData.data).toEqual(getBuffer());
 });
 
test('Возврат строки из буфера', () => {
   const convertibleData = new ArrayBufferConverter();
   convertibleData.load(getBuffer());
   expect(convertibleData.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
 });