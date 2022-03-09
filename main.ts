input.onButtonPressed(Button.A, function () {
    radio.sendValue("aanval", 30)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    if (HP > 0) {
        HP += 0 - value
    }
})
let HP = 0
basic.showIcon(IconNames.Heart)
HP = 90
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    if (HP >= 60) {
        basic.showIcon(IconNames.Happy)
    } else if (HP >= 40 && HP < 60) {
        basic.showIcon(IconNames.Asleep)
    } else if (HP >= 10 && HP < 40) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
