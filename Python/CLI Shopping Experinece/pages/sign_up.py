from getpass import getpass
import sys

from schema.Users import Users

from utils.welcome_heading import welcome_heading
from utils.getch import getch

from pages.homepage import homepage

import settings

def sign_up():
    welcome_heading()

    print("\n\n---Username Should Be Unique---\n")

    username = input("\nEnter Username : ")
    password = getpass("Enter Password : ")

    user = Users.objects(username=username).first()

    if user is None:
        newUser = Users(username=username,password=password)
        newUser.save()
        settings.userId = newUser.username
        print("\n\nUser Created Succesfully")
        getch()
        homepage()
    else:
        choice = input("User Already Exists | Try again-1 | Exit-2 : ")
        if choice == 1:
            sign_up()
        else:
            sys.exit(0)