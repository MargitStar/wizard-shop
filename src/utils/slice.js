// import { createSlice } from "@reduxjs/toolkit";
// import { fetchData } from "./fetcher";

// const fetchSlice = createSlice({
//   name: "fetch",
//   initialState: {
//     elixirs: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     houses: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     ingredients: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     ingredients: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     spells: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     wizards: {
//       loading: false,
//       data: [],
//       error: null,
//     },
//     data: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         console.log(state);
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default fetchSlice.reducer;
