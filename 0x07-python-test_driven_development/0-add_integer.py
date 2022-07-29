#!/usr/bin/python3
'''
Function that add two integers


'''


def add_integer(a, b=98):
    '''Adds two integers, accepts float but converts to int
    Args: a (int): First integer to add
       b (int): Second integer to add defaults to 98'''
    if not (isinstance(a, int) or isinstance(a, float)):
        raise TypeError("a must be an integer")
    if not (isinstance(b, int) or isinstance(b, float)):
        raise TypeError("b must be an integer")
    return int(a) + int(b)
