class Orang {
    
    constructor(nama, tinggi)
    {
        this.nama = nama
        this.tinggi = tinggi
    }
    getNama()
    {
        return this.nama
    }
    getTB()
    {
        return this.tinggi
    }
    setTB(tinggi)
    {
        this.tinggi = tinggi
    }
    getBBI()
    {
        return this.getTB() - 110;
    }
}
// let orang1 = new Orang("Arkan", 166);
// console.log(orang1.getTB());
// console.log(orang1.getBBI());

// mendifinisikan class orang bisa digunakan di file lain
module.exports = Orang;