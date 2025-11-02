/**
 * Linear Search
 * - Terdapat sebuah array angka random dengan panjang 8 elemen sebagai berikut:
 *  [5, 3, 8, 6, 2, 7, 4, 1]
 * - Buatlah sebuah fungsi bernama linearSearch yang menerima parameter array dan target,
 *   dan mengembalikan indeks dari target jika ditemukan, atau -1 jika tidak ditemukan.
 * 
 * - Cari angka 4 pada array tersebut menggunakan fungsi linearSearch.
 * - Cari angka 99 pada array tersebut menggunakan fungsi linearSearch.
 */




const linearSearch = (arrayData, target) => {
  for(let i = 0; i < arrayData.length; i++) {
    if(arrayData[i] === target) {
      return i;
    }
  }

  return -1;
}

const arrayRandom = [5, 4, 55, 77, 23, 11, 24, 14];
console.log(`Hasil pencarian angka 11: ${linearSearch(arrayRandom, 11)}`);
console.log(`Hasil pencarian angka 88: ${linearSearch(arrayRandom, 88)}`);