const shapes = require('./shape.js');

console.log('Imported shapes:', shapes);

describe ('Shape classes', ()=> {
    test ('Triangle render',() => {
        console.log('Triangle class:', shapes.Triangle);
        const shape = new shapes.Triangle ();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  
    test('Circle render', () => {
      console.log('Circle class:', shapes.Circle);  
      const shape = new shapes.Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  
    test('Square render', () => {
      console.log('Square class:', shapes.Square);  
      const shape = new shapes.Square();
      shape.setColor("green");
      expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
  });
