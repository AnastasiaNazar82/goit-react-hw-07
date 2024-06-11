import { createSlice, nanoid } from "@reduxjs/toolkit";
// import items from "./../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const indexEl = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(indexEl, 1);
    },
  },
});

// Експорт редюсер слайса
export default contactsSlice.reducer;
// Екшени слайса для використання в dispatch
export const { addContact, deleteContact } = contactsSlice.actions;
// Функції-селектори для використання в useSelector
export const selectContacts = (state) => state.contacts.items;
