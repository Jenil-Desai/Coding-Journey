from mongoengine import connect

from utils.getch import getch
from utils.welcome_heading import welcome_heading

from pages.sign_in import sign_in
from pages.sign_up import sign_up

def connect_db():
   connect(host="mongodb://127.0.0.1:27017/shoppingExperince")

def main():
   connect_db()
   welcome_heading()

   choice = int(input("\nSignUp-1 | SignIn-2 | Exit-3 : "))
   if choice == 1:
      sign_up()
   elif choice == 2:
      sign_in()
   elif choice == 3:
      exit()
   else:
      print("\n\nInvalid Choice")
      getch()
      main()

main()