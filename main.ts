
let pasek: neopixel.Strip  = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
pasek.showRainbow(1, 360)
basic.forever(function() {
pasek.rotate(1)
pasek.show()

basic.pause(100)

}
)