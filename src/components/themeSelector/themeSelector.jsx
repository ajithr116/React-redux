import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ThemeSelect} from '../../features/themeSelector/themeSlice';

const ThemeSelector = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.themeSelect.theme);


  return (
    <div>
      <h1>Theme : {theme}</h1>
      <button onClick={()=>dispatch(ThemeSelect())}>Change theme </button>
    </div>
  )
}

export default ThemeSelector
