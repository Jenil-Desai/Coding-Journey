from utils.clear_screen import clear_screen

import settings

def welcome_heading():
  clear_screen()

  print("\t\t\t\t===============================")
  print("\n\t\t\t\t  WELCOME TO CLI SHOPPING EXP")
  print("\n\t\t\t\t===============================")

  print("\nCurrent User - ",settings.userId)