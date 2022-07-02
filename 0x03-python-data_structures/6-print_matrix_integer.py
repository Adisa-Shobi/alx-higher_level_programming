#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):
    for item in matrix:
        length = len(item)
        for j in range(length):
            if j == length - 1:
                print("{num}".format(num=item[j]))
            else:
                print("{num}".format(num=item[j]), end=" ")
