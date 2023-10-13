describe('Arithmetic operations on floating-point numbers in JavaScript are not always accurate', () => {
    test('subtraction fails with rounding error', () => {
        const sum = 0.8 - 0.1;
        expect(sum).toBe(0.7000000000000001);
    });

    test('subtraction successful', () => {
        const sum = Math.round((0.8 - 0.1) * 100) / 100;
        expect(sum).toBe(0.7);
    });
});
