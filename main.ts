let X = 0
input.onGesture(Gesture.Shake, function () {
    X = randint(0, 2)
    if ((0 as any) == (1 as any)) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if ((0 as any) == (2 as any)) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
