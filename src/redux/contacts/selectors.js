export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = state.filters.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
