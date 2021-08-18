import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { getItems, getListOfAge } from '../APIs/userAPIs';
import AgeTable from './AgeTable';

const AgeDemographic = () => {

  const [items, setItems] = useState([]);
  const [ageDemographic, setAgeDemographic] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');


  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);


  const handleSelect = event => {
    const item = event.target.value;
    setSelectedItem(item);
    setIsLoading(true);
    getListOfAge(item).then(data => {
      setAgeDemographic(data);
      setIsLoading(false);
    });
  };

  return (
    <div className='mycontainer'>
      <h2 style={{ textAlign: 'center' }}>{`Age DemoGraphic of Users with ${selectedItem === 'items' ? '__' : selectedItem}`}</h2>
      <select
        className='form-select'
        onChange={handleSelect}
        value={selectedItem}
      >
        <option>items</option>
        {items.map(item => (
          <option key={nanoid()}>{item}</option>
        ))}
      </select>
      <AgeTable ageDemographic={ageDemographic} isLoading={isLoading} />
    </div>
  );

};

export default AgeDemographic;
