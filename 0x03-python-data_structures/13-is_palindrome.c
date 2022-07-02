#include "lists.h"

/**
 *is_palindrome - Checks if a singly linked list is a palindrome
 *
 *@head: Head of singly linked list
 *Return: 1 if palindrome, 0 if not
 */
int is_palindrome(listint_t **head)
{
	listint_t *ptr = *head, *ptr_2;
	int len = 0, i = 0, n, k, *entries;

	while(ptr)
	{
		len++;
		ptr = ptr->next;
	}

	entries = malloc(sizeof(*entries) * (len + 1));
	ptr_2 = *head;
	while(ptr_2)
	{
		entries[i++] = ptr_2->n;
		ptr_2 = ptr_2->next;
	}
	n = len / 2;
	for (k = 0; k <= n; k++)
	{
		if (entries[k] != entries[(len - 1) - k])
			return (0);
	}
	return (1);
}
