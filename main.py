def on_button_pressed_a():
    global num1, num2
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.show_number(num1)
    basic.pause(1000)
    if operacao == 0:
        basic.show_string("+")
    elif operacao == 1:
        basic.show_string("-")
    elif operacao == 2:
        basic.show_string("x")
    elif operacao == 3:
        basic.show_string("/")
    basic.pause(1000)
    basic.show_number(num2)
    basic.pause(1000)
    basic.show_string("= ???")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global operacao
    operacao = randint(0, 3)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    if operacao == 0:
        basic.show_number(num1 + num2)
    elif operacao == 1:
        basic.show_number(num1 - num2)
    elif operacao == 2:
        basic.show_number(num1 * num2)
    elif operacao == 3:
        basic.show_number(num1 / num2)
input.on_button_pressed(Button.B, on_button_pressed_b)

num2 = 0
num1 = 0
operacao = 0
basic.show_string("<P  R>")
operacao = randint(0, 3)