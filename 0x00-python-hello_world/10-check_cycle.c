#include "lists.h"

/**
 *check_cycle - Checks if a linked list contains a cycle
 *
 *@list: The head of the list being queried
 *Return: 0 if no cycle, and 1 if cycle is found
 */
int check_cycle(listint_t *list)
{
	listint_t *fast_ptr = list, *slow_ptr = list;
	while(fast_ptr->next->next)
	{
		slow_ptr = slow_ptr->next;
		fast_ptr = fast_ptr->next->next;
		if (fast_ptr == slow_ptr)
			return(1);
	}
	return(0);
}
