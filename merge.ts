export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;

    // Merge collection_1 and collection_2
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            result.push(collection_1[i++]);
        } else {
            result.push(collection_2[j++]);
        }
    }
    // if collection_1 not end
    while (i < collection_1.length) {
        result.push(collection_1[i++]);
    }
    // if collection_2 not end
    while (j < collection_2.length) {
        result.push(collection_2[j++]);
    }

    // Merge result of collection_1 and collection_2 with collection_3
    let finalResult: number[] = [];
    while (result.length > 0 && k >= 0) {
        if (result[0] <= collection_3[k]) {
            finalResult.push(result.shift()!);
        } else {
            finalResult.push(collection_3[k--]);
        }
    }
    while (result.length > 0) {
        finalResult.push(result.shift()!);
    }
    while (k >= 0) {
        finalResult.push(collection_3[k--]);
    }

    return finalResult;
}
