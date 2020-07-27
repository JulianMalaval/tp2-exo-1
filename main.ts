function sens () {
    if (y >= 5) {
        direction = -1
    } else if (y <= 1) {
        direction = 1
    }
    if (y1 >= 5) {
        direction1 = -1
    } else if (y1 <= 1) {
        direction1 = 1
    }
    if (y2 >= 5) {
        direction2 = -1
    } else if (y2 <= 1) {
        direction2 = 1
    }
    if (y3 >= 5) {
        direction3 = -1
    } else if (y3 <= 1) {
        direction3 = 1
    }
    if (y4 >= 5) {
        direction4 = -1
    } else if (y4 <= 1) {
        direction4 = 1
    }
}
function mouvement () {
    for (let index = 0; index <= liste.length; index++) {
        led.plotBrightness(0, y - index, liste[index])
        led.plotBrightness(1, y1 - index, liste[index])
        led.plotBrightness(2, y2 - index, liste[index])
        led.plotBrightness(3, y3 - index, liste[index])
        led.plotBrightness(4, y4 - index, liste[index])
    }
    y += direction
    y1 += direction1
    y2 += direction2
    y3 += direction3
    y4 += direction4
    basic.pause(200)
}
let direction4 = 0
let direction3 = 0
let direction2 = 0
let direction1 = 0
let direction = 0
let y4 = 0
let y3 = 0
let y2 = 0
let y1 = 0
let y = 0
let liste: number[] = []
liste = [0, 255, 0]
y = 0
y1 = 1
y2 = 2
y3 = 3
y4 = 4
direction = 1
direction1 = 1
direction2 = 1
direction3 = 1
direction4 = 1
basic.forever(function () {
    mouvement()
    sens()
})
