let y = 0
let liste: number[] = []
let x = 0
basic.forever(function () {
    liste = [1, 2, 3, 4]
    for (let valeur of liste) {
        led.plot(valeur, valeur)
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        y += 1
        if (y == 4) {
            while (y != 0) {
                led.plot(x, y)
                basic.pause(1000)
                led.unplot(x, y)
                y += -1
            }
        }
    }
})
