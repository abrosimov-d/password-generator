export default class Seed {
    constructor(size) {
        this.data = [];
        this.size = size;
        this.init();
        console.log('Seed()');
    }

    toHex(d) {
        return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
    }

    init() {
        for (let i = 0; i < this.size; i++) {
            this.data.push(0);
        }
    }

    toString() {
        let result = 'Seed:'
        for (let i = 0; i < this.data.length; i++) {
            result += (((i % 16) == 0)?'\n\r':' ') + this.toHex(this.data[i]);
        }
        return result.trim();
    }

    pushInt(i) {
        //this.data.pop();
        this.data.shift();
        this.data.push(i);
        //console.log(this.toString())
    }
}