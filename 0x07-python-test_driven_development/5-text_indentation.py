#!/usr/bin/python3
'''
Defines indentation function that indents text
'''

def text_indentation(text):
    '''
    Function that prints text with two new lines
    after each of these characters ., ? and :

    Args:
       text (str): The string to be printed
    '''
    if not(isinstance(text, str)):
        raise TypeError("text must be a string")
    i = 0
    while i < len(text):
        print(text[i], end="")
        if text[i] in ('.', '?', ':'):
            print('\n\n', end="")
            if (((i + 1) < len(text))
                and (text[i + 1] == " ")):
                i += 1
        i += 1
