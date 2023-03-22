import sys
import json

if __name__ == '__main__':
    email = sys.argv[1]
    # Access other form fields in the same way

    f = open('demofile2.txt', 'w')
    f.write(email)
    f.close