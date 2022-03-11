import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      fname: "hari",
      lname: "haren",
      email: "hari@gmail.com",
      phone: "333",
      address: "chennai",
    },
    {
      id: 2,
      fname: "chelli",
      lname: "prasath",
      email: "chelli@gmail.com",
      phone: "111",
      address: "madurai",
    },
    {
      id: 3,
      fname: "senthil",
      lname: "kumar",
      email: "senthil@gmail.com",
      phone: "222",
      address: "sankarankoil",
    },
    {
      id: 4,
      fname: "Ajith",
      lname: "ram",
      email: "ajith@gmail.com",
      phone: "555",
      address: "tenkasi",
    },
  ],
};

const studentslice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.students.push(action.payload);
    },
    updateData: (state, action) => {
      state.students.map((user) => {
        if (user.id === action.payload.id) {
          user.fname = action.payload.fname;
          user.lname = action.payload.lname;
          user.email = action.payload.email;
          user.phone = action.payload.phone;
          user.address = action.payload.address;
        }
      });
    },
    deleteData: (state, action) => {
      state.students = state.students.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { updateData } = studentslice.actions;
export const { deleteData } = studentslice.actions;
export const { addData } = studentslice.actions;
export default studentslice.reducer;
