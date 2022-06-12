import {createSlice} from '@reduxjs/toolkit'


export const IdsSlice = createSlice({
    name: 'ids',
    initialState: {
      value: 0
    },
    reducers: {
      buttonClicked : (state, action) => {
        state.value = action.payload
      }
    }
  })
export default IdsSlice.reducer;

export const { buttonClicked } = IdsSlice.actions