import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "../filters/slice";
import { selectContacts } from "./slice";


export const selectFilteredContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

