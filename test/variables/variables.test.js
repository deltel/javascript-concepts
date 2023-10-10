describe("variables", () => {
    describe("block scope", () => {
        test.failing("applies to let and const", () => {
            if(true) {
                let x = "x";
                const y = "y";
            }

            expect(x).toBeUndefined();
            expect(y).toBeUndefined();
        });
        
        test("does not apply to var", () => {
            if(true) {
                var x = "x";
            }

            expect(x).toBe("x");
        });
    });
});