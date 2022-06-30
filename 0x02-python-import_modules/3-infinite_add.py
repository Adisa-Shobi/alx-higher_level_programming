#!/usr/bin/python3

import sys

if __name__ == "__main__":
    argc = len(sys.argv)
    i = 0
    for i in range(1, argc):
        i += int(sys.argv[i])
    print(i)
