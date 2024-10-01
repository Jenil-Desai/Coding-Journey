from configs.config import total_value,note_dir

def acc_details_printer():
    print("=======================")
    print("Total Balance : ", total_value)
    print("=======================")
    print("500 Notes     : ", note_dir.get("500"))
    print("200 Notes     : ", note_dir.get("200"))
    print("100 Notes     : ", note_dir.get("100"))
    print("50 Notes      : ", note_dir.get("50"))
    print("=======================")