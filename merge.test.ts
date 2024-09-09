import { merge } from './merge';

test('merges correctly', () => {
    const collection_1 = [1, 4];
    const collection_2 = [2, 5, 6, 9];
    const collection_3 = [8, 7, 6, 2, 1, 0];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8]);
});