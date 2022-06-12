import { configureStore } from "@reduxjs/toolkit";
import  IdsSlice  from "./idSlice";
import usersReducer from "./usersSlice";

export default configureStore({
    reducer:{
        user:usersReducer,
        id:IdsSlice
    }
})