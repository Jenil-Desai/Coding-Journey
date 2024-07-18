from getpass import getpass
import sys

import settings

from schema.Users import Users

from utils.getch import getch
from utils.welcome_heading import welcome_heading

from pages.homepage import homepage

def sign_in():
    password_trys = 5
    while password_trys > 0:
        welcome_heading()

        username = input("\nEnter Username : ")
        password = getpass("Enter Password : ")

        user = Users.objects(username=username,password=password)

        if user:
            settings.userId = username
            print("\n\nSigned In Successfully")
            getch()
            homepage()
            break
        else:
            password_trys-=1
            choice = input("Invalid Username Or Password | Exit-1 : ")
            if choice == 1:
                sys.exit(0)
    else:
        print("Password Trys Breached. Try again later")
        getch()
        sys.exit(0)