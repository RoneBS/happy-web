import React, { useState } from 'react';
import { Container, HiddenCheckbox } from './styles';



const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  function handleCheckedBox() {
    setChecked(!checked)
  }

  return (
    <Container checked={checked} onClick={setChecked}>
      <HiddenCheckbox checked={checked} onChange={handleCheckedBox} />
    </Container>
  );
};

export default Checkbox;
