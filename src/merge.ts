export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {

  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;

  const result: number[] = [];

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {

    const v1 = i >= 0 ? collection_1[i] : Infinity;
    const v2 = j < collection_2.length ? collection_2[j] : Infinity;
    const v3 = k < collection_3.length ? collection_3[k] : Infinity;

    const min = Math.min(v1, v2, v3);

    result.push(min);

    if (min === v1){
      i--;
    } else if (min === v2){
      j++;
    } else {
      k++;
    }
  }

  return result;
}
