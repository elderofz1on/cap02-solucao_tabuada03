input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.pause(1000)
    if (operacao == 0) {
        basic.showString("+")
    } else if (operacao == 1) {
        basic.showString("-")
    } else if (operacao == 2) {
        basic.showString("x")
    } else if (operacao == 3) {
        basic.showString("/")
    }
    
    basic.pause(1000)
    basic.showNumber(num2)
    basic.pause(1000)
    basic.showString("= ???")
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    operacao = randint(0, 3)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (operacao == 0) {
        basic.showNumber(num1 + num2)
    } else if (operacao == 1) {
        basic.showNumber(num1 - num2)
    } else if (operacao == 2) {
        basic.showNumber(num1 * num2)
    } else if (operacao == 3) {
        basic.showNumber(num1 / num2)
    }
    
})
let num2 = 0
let num1 = 0
let operacao = 0
basic.showString("<P  R>")
operacao = randint(0, 3)
