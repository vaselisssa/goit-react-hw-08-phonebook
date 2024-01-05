import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
      .sort((a, b) => {
        const itemA = a.name.toUpperCase();
        const itemB = b.name.toUpperCase();
        return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
      });
  }
);
