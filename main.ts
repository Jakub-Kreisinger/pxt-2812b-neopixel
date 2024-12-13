let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
pasek.showRainbow(1, 360)

let rotace = 0
let zastaveni = false
let smer = false

basic.forever(function () {
    
    if (input.buttonIsPressed(Button.AB)) {
        smer = !smer 
        basic.pause(500) 
    }

    if (input.logoIsPressed()) {
        zastaveni = !zastaveni
        basic.pause(500)
    }
    
    if (!zastaveni) { 
        pasek.rotate(1)
        pasek.show()
        basic.pause(rotace)
    }
})

input.onButtonPressed(Button.B, function () {
    if (rotace > 10) {
        rotace -= 10
        basic.showNumber(rotace / 100)
    }
})

input.onButtonPressed(Button.A, function () {
    if (rotace < 1000) {
        rotace += 10
        basic.showNumber(rotace / 100)
    }
})

