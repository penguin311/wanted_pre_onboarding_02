const { configureStore, createSlice } = require("@reduxjs/toolkit");

const periodInitialState = {
  exposure: { radio: "제한 없음", calendar: "YYYY.MM.DD YY:MM" },
  sales: { radio: "제한 없음", calendar: "YYYY.MM.DD YY:MM" },
};

const setPeriodSlice = createSlice({
  name: "period",
  initialState: periodInitialState,
  reducers: {
    exposureRadio(state, action) {
      state.exposure.radio = action.payload;
    },
    salesRadio(state, action) {
      state.sales.radio = action.payload;
    },
  },
});

const uploadInitialState = {
  introduce: { imgArr: [{ id: 1, name: "test" }] },
  recommend: { img: "" },
};

const imgUploadSlice = createSlice({
  name: "upload",
  initialState: uploadInitialState,
  reducers: {
    introduce(state, action) {
      state.introduce = action.payload;
    },
    recommend(state, action) {
      state.recommend = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { period: setPeriodSlice.reducer, upload: imgUploadSlice.reducer },
});

export const setPeriodActions = setPeriodSlice.actions;
export const imgUploadActions = imgUploadSlice.actions;

export default store;
