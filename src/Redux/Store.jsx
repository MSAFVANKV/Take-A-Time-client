import { configureStore } from '@reduxjs/toolkit';
import UserSignupReducer from './SignupSlice';


const store = configureStore({
    reducer: {
        user:UserSignupReducer
    }
})

export default store