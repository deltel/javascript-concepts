describe("Arithmetic operations on floating-point numbers in JavaScript are not always accurate", () => {
    test("addition fails", () => {
        const sum = 7767674.28 + 3348656
        expect(sum).toBe(11116330.28);
    });

    test("addition successful", () => {
        const sum = (7767674.28 * 100 + 3348656 * 100)/100
        expect(sum).toBe(11116330.28);
    });
});