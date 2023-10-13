describe('variables', () => {
    describe('block scope', () => {
        test('applies to let and const', () => {
            if (true) {
                let x = 'x';
                const y = 'y';
            }

            expect(() => x).toThrow(ReferenceError);
            expect(() => y).toThrow(ReferenceError);
        });

        test('does not apply to var', () => {
            if (true) {
                var x = 'x';
            }

            expect(x).toBe('x');
        });
    });

    describe('hoisting', () => {
        test('is immaterial for "let" and "const"', () => {
            let x = 1;
            const y = 2;

            (function () {
                expect(() => x).toThrow(ReferenceError); // notice that x is ont 1
                expect(() => y).toThrow(ReferenceError); // and y is not 2
                let x = 'x';
                const y = 'y';
            })();
        });

        test('var declarations are hoisted', () => {
            expect(x).toBeUndefined();
            var x = 'x';
        });
    });
});
