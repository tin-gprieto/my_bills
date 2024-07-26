import {describe, expect, test} from '@jest/globals';
import { User } from '../src/models/user';

describe('testing index file', () => {
    test('class example test', () => {
        let justine = new User('Justine', 23);
        let marie = new User('Marie', 17);

        const isJustineAnAdult: boolean = justine.isAdult();
        const isMarieAnAdult: boolean = marie.isAdult();

        expect(isJustineAnAdult).toBe(true);
        expect(isMarieAnAdult).toBe(false);
    });
});