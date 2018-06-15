import React from 'react';
import { SUBMIT_KITTEN_VIEW } from './SubmitKitten';

export const HOME_VIEW = 'HOME_VIEW'
export const Home = ({ changeCurrentView }) => (
  <div>
    <h4>
      Look at our Kittens (View #2)
    </h4>
    <a href="#" onClick={() => changeCurrentView(SUBMIT_KITTEN_VIEW)} >Submit a Kitten</a>
  </div>
)
