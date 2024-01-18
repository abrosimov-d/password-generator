export default function MouseToSeed(seed, setSeedText) {

    function sumBase256(data) {
        let result = 0;
        for (let i = 0; i < data.length; i++) {
            result = (result + data[i]) % 256;
        }
        return result;
    }
        document.querySelector('.sv').addEventListener('mousemove', (e) => {
            let data = [
                e.screenX,
                e.screenY,
                e.clientX,
                e.clientY
            ]
            let next = sumBase256(data);
            //console.log(next)
            seed.pushInt(next);
            setSeedText(seed.toString());
        })
    }
