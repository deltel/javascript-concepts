describe('functions', () => {
    describe('parameters', () => {
        test('primitives reassigned in a function do not affect the global scope', () => {
            function func1(x) {
                x = 'not x';
            }

            let x = 'x';
            func1(x);

            expect(x).toBe('x');
        });

        test('objects reassigned in a function do not affect the global scope', () => {
            function func1(x) {
                x = 'not x';
            }

            let x = { letter: 'x' };
            func1(x);

            expect(x).toEqual({ letter: 'x' });
        });

        test('arrays reassigned in a function do not affect the global scope', () => {
            function func1(x) {
                x = 'not x';
            }

            let x = ['x'];
            func1(x);

            expect(x).toEqual(['x']);
        });

        test('the change in the property of an object is reflected globally', () => {
            function changeName(person) {
                person.name = 'Jane';
            }

            const person = {
                name: 'John',
                age: 20,
            };

            changeName(person);

            expect(person.name).toBe('Jane');
        });

        test('the change in the element of an array is reflected globally', () => {
            function changeName(person) {
                person[0] = 'Jane';
            }

            const person = ['John'];

            changeName(person);

            expect(person[0]).toBe('Jane');
        });
    });

    describe('hoisting', () => {
        test('function expressions (anonymous functions) are not hoisted', () => {
            expect(square).toBeUndefined();
            expect(() => square(5)).toThrow(TypeError);

            var square = function (n) {
                return n * n;
            };

            expect(() => square1(5)).toThrow(ReferenceError);

            const square1 = function (n) {
                return n * n;
            };
        });

        test('function declarations are hoisted', () => {
            expect(square(5)).toBe(25);

            function square(n) {
                return n * n;
            }
        });
    });
});
