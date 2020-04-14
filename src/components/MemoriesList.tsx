import React from 'react';
import {
  IonRow,
  IonCol
} from '@ionic/react';

import MemoryItem from './MemoryItem';
import { Memory } from '../data/memories-context';

const MemoriesList: React.FC<{ items: Memory[] }> = (props) => {
  return (
    <React.Fragment>
      {props.items.map(memory => (
        <IonRow key={memory.id}>
          <IonCol>
            <MemoryItem
              title={memory.title}
              image={memory.base64Url}
            />
          </IonCol>
        </IonRow>
      ))}
    </React.Fragment>
  );

};

export default MemoriesList;