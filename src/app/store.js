import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import themereducer from '../features/themeSelector/themeSlice';


const store = configureStore({
    reducer:{
        counter: counterReducer,
        themeSelect: themereducer,
    }
})

export default store;