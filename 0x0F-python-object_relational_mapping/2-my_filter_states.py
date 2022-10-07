#!/usr/bin/python3
''' lists all states with a name matching with specific name
 from the database hbtn_0e_0_usa
'''
import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, db=sys.argv[3],
                         user=sys.argv[1], passwd=sys.argv[2])
    c = db.cursor()
    c.execute(
        '''SELECT * FROM states WHERE states.name = '{state_name}' ORDER\
        BY states.id ASC'''.format(state_name=sys.argv[4])
    )
    for row in c.fetchall():
        print(row)
