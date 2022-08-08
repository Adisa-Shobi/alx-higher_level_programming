#!/usr/bin/python3
'''Creates a class called Base
'''
import json


class Base:
    '''This class will be the base of all other classes in this Project
    '''
    __nb_objects = 0

    def __init__(self, id=None):
        '''Initializes new base instance

        Args:
           id (int): Used as identifier for subclasses incase of debugging
        '''
        if id is None:
            self.__class__.__nb_objects += 1
            self.id = self.__class__.__nb_objects
        else:
            self.id = id

    @staticmethod
    def to_json_string(list_dictionaries):
        '''Converts a list containing dictionaries to JSON

        Args:
           list_dictionaries (list): List of dictionaries converted to JSON
        '''
        if (list_dictionaries is None) or (list_dictionaries == []):
            return "[]"
        else:
            return json.dumps(list_dictionaries)

    @classmethod
    def save_to_file(cls, list_objs):
        '''Converts square, rectangle objects to json and saves them in files

        Args:
           list_objs (list): A list of Square of Rectangle objects
        '''
        dict_list = [value.to_dictionary() for value in list_objs]
        class_name = cls.__name__
        list_objs_json = cls.to_json_string(dict_list)
        with open(f"{class_name}.json", 'w') as f:
            f.write(list_objs_json)

    @staticmethod
    def from_json_string(json_string):
        '''Converts json string back into an object

        Args:
           json_string (str): JSON formatted string
        '''
        if json_string is None or len(json_string) == 0:
            return []
        return json.loads(json_string)

    @classmethod
    def create(cls, **dictionary):
        '''Creates a new instance of Square, Rectangle based on dictionary

        Args:
           dictionary (dict): A dictionary containing values to set to instance
        '''
        if cls.__name__ == "Square":
            my_square = cls(1)
            my_square.update(**dictionary)
            return my_square
        elif cls.__name__ == "Rectangle":
            my_rectangle = cls(4, 4)
            my_rectangle.update(**dictionary)
            return my_rectangle

    @classmethod
    def load_from_file(cls):
        '''Loads a Square or Rectangle object from a json file
        if the file is not found an empty string is returned
        '''
        try:
            with open(f"{cls.__name__}.json", 'r') as f:
                f_json = f.read()
        except FileNotFoundError:
            return []
        obj_dict_list = cls.from_json_string(f_json)
        return [cls.create(**value) for value in obj_dict_list]
