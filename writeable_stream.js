const fs = require('fs')

const ws = fs.createWriteStream('./out.text', {
    highWaterMark: 3 // 设置highWaterMark为3后，drained返回false，表示没有排干
})

for (let i = 0; i < 1000; i++) {
    const drained = ws.write('hahahahahahaha\n') // drained代表有没有排干内容
    console.log(drained, i)
}