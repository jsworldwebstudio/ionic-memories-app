import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  isPlatform,
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';
import { add } from 'ionicons/icons';

import MemoriesList from './MemoriesList';
import FixedButtonFab from './FixedButtonFab';
import ToolbarAction from './ToolbarAction';
import { Memory } from '../data/memories-context';

const MemoriesContent: React.FC<{
  title: string;
  fallbackText: string;
  memories: Memory[];
}> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          {isPlatform('ios') &&
            <ToolbarAction icon={add} pageLink="/new-memory" />
          }
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length === 0 && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">
                  <h2>{props.fallbackText}</h2>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={props.memories} />
        </IonGrid>
        {!isPlatform('ios') &&
          <FixedButtonFab icon={add} pageLink="/new-memory" />
        }
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;