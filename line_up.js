// 排队吃饭系统
const {
    Readable,
    Writable
} = require('stream')

class LineUp extends Readable {
    constructor(opts = {
        objectMode: true
    }) {
        super(opts)
        this.count = 0
    }

    _read() {
        if (this.count > 100) {
            this.push(null)
        }
        this.push({
            id: this.count++
        })

    }
}

class Eat extends Writable {
    constructor(opts = {
        objectMode: true,
        highWaterMark: 10
    }) {
        super(opts)
    }
    _write(chunk, encoding, callback) {
        console.log(chunk)
        const {
            id
        } =
        chunk

        setTimeout(() => {  
            callback(null)  // 回调结束才执行下一次写入
        }, id * 100)
    }
}

const line = new LineUp()
const eat = new Eat()

line.pipe(eat)