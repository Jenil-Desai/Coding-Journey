import os

def clear_screen():
    # For Windows
    if os.name == 'nt':
        os.system('cls')
    # For Unix/Linux/Mac
    else:
        os.system('clear')
