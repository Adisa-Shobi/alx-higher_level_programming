#define PY_SSIZE_T_CLEAN
#include <Python.h>

/**
 *print_python_list_info - Prints basic info about python lists
 *@p: A PyObject
 *Return: void
 */
void print_python_list_info(PyObject *p)
{
	Py_ssize_t size;
	size = PyList_Size(p);
	printf("[*] Size of the Python List = %d", size);
}
