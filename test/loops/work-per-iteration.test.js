const process = require("../../utils/process");
const range = require("../../utils/range");

describe("loops", () => {
    describe("work done per iteration", () => {
        const items = range(10000000);
        describe("for loop", () => {
            test("takes longer when a property look up is done in the initialization block", () => {
                let firstStartTime = Date.now();
                for (let i = 0; i < items.length; i++) {
                    process(items[i]);
                }
                let firstEndTime = Date.now();
                const firstDuration = firstEndTime - firstStartTime;


                let secondStartTime = Date.now();
                for (let i = 0, len = items.length; i < len; i++) {
                    process(items[i]);
                }
                let secondEndTime = Date.now();
                const secondDuration = secondEndTime - secondStartTime;

                expect(secondDuration).toBeLessThan(firstDuration);
            });
        });

        describe("while loop", () => {
            test("takes longer when a property look up is done in the initialization block", () => {
                let i = 0;
                let firstStartTime = Date.now();
                while (i < items.length) {
                    process(items[i++]);
                }
                let firstEndTime = Date.now();
                const firstDuration = firstEndTime - firstStartTime;

                let j = 0;
                const len = items.length;
                let secondStartTime = Date.now();
                while (j < len) {
                    process(items[j++]);
                }
                let secondEndTime = Date.now();
                const secondDuration = secondEndTime - secondStartTime;

                expect(secondDuration).toBeLessThan(firstDuration);
            });
        });

        describe("do while loop", () => {
            test("takes longer when a property look up is done in the initialization block", () => {
                let i = 0;
                let firstStartTime = Date.now();
                do {
                    process(items[i++]);
                } while (i < items.length);
                let firstEndTime = Date.now();
                const firstDuration = firstEndTime - firstStartTime;

                let j = 0;
                const len = items.length;
                let secondStartTime = Date.now();
                do {
                    process(items[j++]);
                } while (j < len);
                let secondEndTime = Date.now();
                const secondDuration = secondEndTime - secondStartTime;

                expect(secondDuration).toBeLessThan(firstDuration);
            });
        });
    });
});