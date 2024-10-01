from funcs.format_acc_details_printer import acc_details_printer
from funcs.format_error_print import error_printer
from configs.config import total_value,note_dir
from utils.clear_screen import clear_screen

while True:
    sel_note = {}
    clear_screen()

    acc_details_printer()

    for key,value in note_dir.items():
        while True:
            input_note = int(input(f"Enter Number Of {key} Notes : "))
            if input_note <= value:
                note_dir[key] = value - input_note
                sel_note[key] = input_note
                break
            else:
                error_printer("Sufficient Notes Aren't Available")

    else:
        clear_screen()
        total = 0
        for key,value in sel_note.items():
            total = int(key) * value + total

        if total <= total_value:
            total_value = total_value - total
            print("=======================")
            print(f"Amount Withdrawn       : {total}")
            print(f"Now Your Account Holds : {total_value}")
            print("=======================")

            while True:
                ch = int(input("Do You Want Withdraw Again ? [1-Yes / 2-No] : "))

                if ch == 2:
                    exit(0)
                elif ch == 1:
                    break
                else:
                    error_printer("Invalid Choice")
        else:
            error_printer("Your Account Does Not Have Sufficient Balance")