input.onButtonPressed(Button.A, function () {
    for (let Y = 0; Y <= 7; Y++) {
        led.plot(Y, 7 - Y)
        basic.pause(100)
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    for (let Y = 0; Y <= 5; Y++) {
        led.plot(Y, 5 - Y)
        basic.pause(100)
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    for (let Y = 0; Y <= 3; Y++) {
        led.plot(Y, 3 - Y)
        basic.pause(100)
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
    for (let Y = 0; Y <= 1; Y++) {
        led.plot(Y, 1 - Y)
        basic.pause(100)
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
})
