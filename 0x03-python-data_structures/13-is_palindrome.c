#include "lists.h"
#include <stdio.h>

/**
 *is_palindrome - Checks if a singly linked list is a palindrome
 *
 *@head: Head of singly linked list
 *Return: 1 if palindrome, 0 if not
 */
int is_palindrome(listint_t **head)
{
	listint_t *ptr = *head, *ptr_2;
	int len = 0, i = 0, n, *entries;

	while (ptr)
	{
		len++;
		ptr = ptr->next;
	}
	n = len / 2;
	entries = malloc(sizeof(*entries) * (n + 1));
	ptr_2 = *head;
	while (ptr_2)
	{
		if (i < n)
		{
			entries[i] = ptr_2->n;
		}
		if (len % 2 != 0 && i == n)
		{
			ptr_2 = ptr_2->next;
			i++;
		}
		if (i >= n)
		{
			if (entries[(len - 1) - i] != ptr_2->n)
				return (0);
		}
		i++;
		ptr_2 = ptr_2->next;
	}
	free(entries);
	return (1);
}
