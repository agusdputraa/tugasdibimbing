/**
 * Insertion Sort
 * Terdapat sebuah array angka tidak terurut sebagai berikut:
 * [77, 12, 22, 11, 90, 34, 64, 25, 1, 8, 81]
 * 
 * - Buatlah fungsi selectionSort untuk mengurutkan array tersebut menggunakan algoritma Selection Sort.
 * - Setelah diurutkan, tampilkan array yang sudah terurut.
 */

const insertionSortAlgorithm = (arrayAngkaOriginal) => {
  const arrayAngka = [...arrayAngkaOriginal]; // Copy the original array to avoid mutation
  const arrayLength = arrayAngka.length;

  for(let i = 1; i < arrayLength; i++) {
    let keyTarget = arrayAngka[i];
    let j = i - 1;
    
    while(j >= 0 && arrayAngka[j] > keyTarget) {
      arrayAngka[j+1] = arrayAngka[j];
      j--;
    }

    arrayAngka[j+1] = keyTarget;
  }

  return arrayAngka;
}

const arrayDataRandom = [77, 12, 22, 11, 90, 34, 64, 25, 1, 8, 81];
const arrayDataSorted = insertionSortAlgorithm(arrayDataRandom);
console.log("\n Array Original:", arrayDataRandom, "\n");
console.log("\n Array Sorted:", arrayDataSorted, "\n"); // Output: Array Sorted: [1, 8, 11, 12, 22, 25, 34, 64, 77, 81, 90]

