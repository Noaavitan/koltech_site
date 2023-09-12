from pathlib import Path
import glob
import os

# find files in folders base on file type
def find_all_file_in_folder(main_folder ,sufix=''):
    return [i for i in glob.glob(main_folder.rstrip("/\\") + "/*.*") if i.endswith(sufix)]


BASE_DIR = Path(__file__).resolve().parent.parent
BASE_DIR = str(BASE_DIR).replace("\\","/")
print("BASE_DIR", BASE_DIR)
static_dir = f"{BASE_DIR}/statics"


print("img_folder: ", static_dir + "/gallery-images")
list_img = find_all_file_in_folder(static_dir + "/gallery-images")
list_img = [os.path.basename(i) for i in list_img]