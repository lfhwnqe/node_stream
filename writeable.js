const {
    Writable
} = require('stream')
const fs = require('fs')

class NWritable extends Writable {
    constructor(opt) {
        super(opt)
    }

    _write(chunk, encoding, cb) {
        fs.writeSync(1, chunk.toString() + '\n')
        setTimeout(() => {
            cb(null)
        }, 100)
    }
}

const ws = new NWritable()

ws.on('end', () => {
    console.log('end')
})

for (let i = 0; i < 100; i++) {
    ws.write('qeqwekjh' + i)
}

// const fs = require('fs')

// const rs = fs.createReadStream('./readable_stream.js')
// const ws = fs.createWriteStream('./put.txt')

// rs.pipe(ws)