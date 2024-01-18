export default class Generator {
    constructor(seed) {
        this.seed = seed;
        this.lows = 'abcdefghijklmnopqrstuvwxyz';
        this.caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.digits = '0123456789';
        this.specs = '~!@#$%^&*()_+-=<>.,/?';
    }

    randN(n) {
        return Math.floor(n * Math.random());
    }

    generate() {
        let result = '';
        let alphabet = this.lows + this.caps + this.digits + this.specs;
        for (let i = 0; i<= 24; i++) {
            result += alphabet[this.randN(alphabet.length)];
        }
        return result;
    }
}