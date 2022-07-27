import unittest
'''
Unit tests for max integer function
'''

max_integer = __import__("6-max_integer").max_integer

class TestMaxInteger(unittest.TestCase):
    '''
    Test class for max_integer function
    '''
    def test_max_integer(self):
        '''
        Tests output of regular function output
        '''
        self.assertAlmostEqual(max_integer([1, 3, 4, 5, 6, 7]), 7)
        self.assertAlmostEqual(max_integer([]), None)
        self.assertAlmostEqual(max_integer([1, 2 , 3, 4, 4]), 4)
