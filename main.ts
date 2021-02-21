let touches = 0
input.onPinPressed(TouchPin.P0, function () {
    touches += 1
    basic.showNumber(touches)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # # # .
        . . . . #
        . # # # .
        # . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
