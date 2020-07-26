liste: List[number] = []

def on_forever():
    global liste
    liste = [0, 1, 2, 3, 4]
    for valeur in liste:
        led.plot(valeur, valeur)
basic.forever(on_forever)
