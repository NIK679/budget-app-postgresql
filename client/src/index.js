import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const elemsSelect = document.querySelectorAll('select');
  // eslint-disable-next-line no-unused-vars
  const instancesSelect = M.FormSelect.init(elemsSelect);
  const elemsDatePicker = document.querySelectorAll('.datepicker');
  // eslint-disable-next-line no-unused-vars
  const instancesDatePicker = M.Datepicker.init(elemsDatePicker, {
    showClearBtn: true,
  });
  const elemsTimePicker = document.querySelectorAll('.timepicker');
  // eslint-disable-next-line no-unused-vars
  const instancesTimePicker = M.Timepicker.init(elemsTimePicker, {
    showClearBtn: true,
  });
  const elemsFAB = document.querySelectorAll('.fixed-action-btn');
  // eslint-disable-next-line no-unused-vars
  const instances = M.FloatingActionButton.init(elemsFAB, {
    hoverEnabled: false,
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
