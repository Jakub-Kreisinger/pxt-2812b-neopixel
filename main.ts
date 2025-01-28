let strip = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
let speed = 0 
let direction = 1 
let lastPressA = 0
let lastPressB = 0

basic.forever(() => {
   
    basic.showNumber(speed)

    
    let delay = Math.max(10, 1000 - (speed * 10))

    
    if (direction === 1) {
        strip.rotate(1)
    } else {
        strip.rotate(-1)
    }

    
    strip.show()

    
    basic.pause(delay)
})

input.onButtonPressed(Button.A, () => {
    let now = input.runningTime()
    if (now - lastPressA > 400) {
        speed = Math.min(99, speed + 1)
        lastPressA = now
    } else {
        control.inBackground(() => {
            while (input.buttonIsPressed(Button.A)) {
                basic.pause(100)
                speed = Math.min(99, speed + 1)
            }
        })
    }
})

input.onButtonPressed(Button.B, () => {
    let now = input.runningTime()
    if (now - lastPressB > 400) {
        speed = Math.max(0, speed - 1)
        lastPressB = now
    } else {
        control.inBackground(() => {
            while (input.buttonIsPressed(Button.B)) {
                basic.pause(100)
                speed = Math.max(0, speed - 1)
            }
        })
    }
})

input.onLogoEvent(TouchButtonEvent.Pressed, () => {

    direction *= -1
})
