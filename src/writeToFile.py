import sys
import json

if __name__ == '__main__':
    data = sys.argv[1]
    parssed = json.loads(data)
    # Access other form fields in the same way
    f = open('demofile2.txt', 'w')
    f.write(parssed['email'])
    f.close