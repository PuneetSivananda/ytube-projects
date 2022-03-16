import pathlib
from collections import Counter

entiries = pathlib.Path("./").iterdir()
extensions = [entry.suffix for entry in entiries if entry.is_file()]

if __name__ == "__main__":
    print("{0}".format(Counter(extensions)))