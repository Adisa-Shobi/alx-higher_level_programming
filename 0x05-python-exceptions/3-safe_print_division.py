#!/usr/bin/pyhton3
def safe_print_division(a, b):
    result = None
    try:
        result = a / b
    except ZeroDivisionError:
        pass
    finally:
        print("Inside Result: {}".format(result))
    return(result)
