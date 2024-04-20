import {useState} from 'react';
import './App.css';

function App() {
  const [textValue, setTextValue] = useState('');
  const [styleType, setStyleType] = useState('');

  const textChangeClickHandler = (event) => {
    setTextValue(event.target.value);
  }

  const styleChangeClickHandler = (event) => {
    const styleType = event.target.getAttribute('style-type');

    console.log('NeilTest - styleType', styleType);

    styleType === 'remove' ? console.log('NeilTest - true') : console.log('NeilTest - false');
    styleType === 'remove' ? setStyleType('remove') : <></>;
    styleType === 'uppercase' ? setStyleType('uppercase') : <></>;
    styleType === 'lowercase' ? setStyleType('lowercase') : <></>;
    styleType === 'capitalization' ? setStyleType('capitalization') : <></>;
  }


  return (
    <div className="App">
      <h1>Text case change</h1>
      <label>Enter your text </label>
      <input onChange={textChangeClickHandler} />
      <p className={styleType}>{textValue}</p>
      <button onClick={styleChangeClickHandler} style-type="remove">Remove styling</button>
      <button onClick={styleChangeClickHandler} style-type="uppercase">uppercase</button>
      <button onClick={styleChangeClickHandler} style-type="lowercase">lowercase</button>
      <button onClick={styleChangeClickHandler} style-type="capitalization">capitalization</button>
    </div>
  );
}

export default App;
