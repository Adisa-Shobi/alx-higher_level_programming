#!/usr/bin/python3
'''Defines class Square
'''
Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    '''Square class represents a square
    '''
    def __init__(self, size):
        '''Initializes a new Square object
        '''
        super().__init__(size, size)
