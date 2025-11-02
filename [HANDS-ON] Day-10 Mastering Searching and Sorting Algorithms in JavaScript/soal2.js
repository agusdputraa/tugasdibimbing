/**
 * Binary Search
 * - Terdapat sebuah array angka random yang sudah diurutkan sebagai berikut:
 * [3, 10, 13, 29, 47, 60, 77, 81, 93, 101
 * 
 * Buatlah fungsi binarySearch untuk mencari indeks dari target yang diberikan
 * - Jika target ditemukan, kembalikan indeksnya
 * - Jika tidak ditemukan, kembalikan -1.
 * 
 * NOTE: Gunakan fungsi recursive untuk implementasi binary search.
 * - Cari angka 29 pada array tersebut menggunakan fungsi binarySearch.
 * - Cari angka 100 pada array tersebut menggunakan fungsi binarySearch.
 */

const binarySearchRecursive = ({
  arrayData,
  startIndex,
  endIndex,
  target
}) => {
  if(startIndex > endIndex) {
    return -1;
  }

  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  if(arrayData[middleIndex] === target) {
    return middleIndex; 
  }

  if(arrayData[middleIndex] < target) {
    return binarySearchRecursive({
      arrayData,
      startIndex: middleIndex + 1,
      endIndex,
      target
    });
  } else {
    return binarySearchRecursive({
      arrayData,
      startIndex,
      endIndex: middleIndex - 1,
      target
    })
  }
}

const arrayData = [3, 10, 13, 29, 47, 60, 77, 81, 93, 101];
console.log(`Hasil pencarian angka 47: ${binarySearchRecursive({
  arrayData,
  startIndex: 0,
  endIndex: arrayData.length - 1,
  target: 47
})}`);
console.log(`Hasil pencarian angka 100: ${binarySearchRecursive({
  arrayData,
  startIndex: 0,
  endIndex: arrayData.length - 1,
  target: 100
})}`);
