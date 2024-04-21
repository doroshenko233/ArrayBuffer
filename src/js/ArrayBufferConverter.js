export default class ArrayBufferConverter {
    load(buffer) {
      this.data = buffer;
    }
  
    toString() {
      const bufferInt16 = new Int16Array(this.data);
  
      const str = bufferInt16.reduce((acc, elem) => {
        acc.push(String.fromCharCode(elem));
        return acc;
      }, []);
  
      return str.join('');
    }
  }
  