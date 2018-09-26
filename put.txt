const {
    Readable
} = require('stream')

class NReadable extends Readable {
    constructor(opts) {
        super(opts)
        this.count = 0
    }

    _read(size) { // 读取文件
        const r = this.push('lakshjdlksahdlsahdklsah')
        console.log(r) // 如果highWaterMart没有满，则是false，装满了则是true 可用来处理背压问题
        this.count++
        if (this.count > 10) {
            this.push(null)
        }
    }
}

const rs = new NReadable({
    hightWaterMark: 10  // 水桶容量
})

rs.on('data', (data) => {
    console.log(data.toString())
    rs.pause()
    setTimeout(() => {
        rs.resume()
    }, 1000)
})

rs.on('end', () => {
    console.log('end')
})