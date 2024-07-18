import os

def getch():
    if os.name == 'nt':  # Windows
        import msvcrt
        return msvcrt.getch().decode()
    else:  # Unix/Linux
        import sys
        import tty
        import termios
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(fd)
            ch = sys.stdin.read(1)
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
        return ch
