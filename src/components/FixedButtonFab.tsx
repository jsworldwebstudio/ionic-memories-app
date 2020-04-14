import React from 'react';
import {
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';

const FixedButtonFab: React.FC<{
  icon: string;
  pageLink: string;
}> = props => {
  return (
    <IonFab horizontal="end" vertical="bottom" slot="fixed">
      <IonFabButton routerLink={props.pageLink}>
        <IonIcon icon={props.icon} />
      </IonFabButton>
    </IonFab>
  );
};

export default FixedButtonFab;