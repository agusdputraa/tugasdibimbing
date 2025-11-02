const Orang = require('../Orang');
class LakiLaki extends Orang
{
    constructor(nama, hobi, tinggi)
    {
        super(nama, tinggi)
        this.hobi = hobi;
    }
    
    getBBI()
    {
        return (this.getTB() - 100) - ((this.getTB() - 100) * 10/100);
    }
}
let lakilaki_1 = new LakiLaki("arkan", "jogging", 166);
console.log(lakilaki_1.getBBI());