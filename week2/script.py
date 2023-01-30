import sys

def main(arguments):
    print("This is the main function, and it has access to the following variables")
    for arg in arguments:
        print(arg)

if __name__ == '__main__':
    main(sys.argv)