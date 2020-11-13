input.onGesture(Gesture.Shake, function () {
    グーチョキパー = randint(0, 2)
    if (グーチョキパー == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (グーチョキパー == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let グーチョキパー = 0
basic.showLeds(`
    # . . . #
    . . . # .
    # # # . #
    # . # . .
    # # # . .
    `)
basic.pause(1000)
