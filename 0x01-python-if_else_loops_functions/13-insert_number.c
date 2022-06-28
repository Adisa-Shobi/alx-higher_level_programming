#include "lists.h"
#include <stdlib.h>

/**
 *insert_node - Inserts a node into a sorted list
 *
 *@head: head of sorted singly linked list
 *@number: The node data
 *Return: A pointer to the newly inserted node
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *new;
	listint_t *current = *head;

	new = malloc(sizeof(listint_t));
	if (new == NULL)
		return (NULL);
	new->n = number;
	new->next = NULL;
	if (current == NULL)
	{
		*head = new;
		return(new);
	}
	while (current)
	{
		if (current->n > number)
		{
			new->next = current;
			return (new);
		}
		else if (current->next == NULL)
		{
			current->next = new;
			return (new);
		}
		else if (current->next->n > number)
		{
			new->next = current->next;
			current->next = new;
			return (new);
		}
		else
			current = current->next;
	}
	return (new);
}
