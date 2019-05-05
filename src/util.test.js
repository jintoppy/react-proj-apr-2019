import { add } from './util';

describe('Util', () => {
    describe('Add Functionality', () => {
        beforeEach(() => {
            //console.log('within beforeEach');
        });
        it('should add two numbers', () => {
            const result = add(1,2);
            expect(result).toBe(3);  // Matchers
        });
        it('should return if single value', () => {
            const result = add(1);
            expect(result).toBe(1);  // Matchers
        });

    });
})
