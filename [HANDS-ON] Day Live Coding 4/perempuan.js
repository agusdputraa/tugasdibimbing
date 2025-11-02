const Orang = require('../Orang');
class Perempuan extends Orang
{
    constructor(nama, hobi, tinggi)
    {
        super(nama, tinggi)
        this.hobi = hobi;
    }
    
    getBBI()
    {
        return (this.getTB() - 100) - ((this.getTB() - 100) * 15/100);
    }
}
let Perempuan_1 = new Perempuan("Lina", "jogging", 166);
console.log(Perempuan_1.getBBI());