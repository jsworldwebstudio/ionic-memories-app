import React from 'react';
import {
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';

const ToolbarAction: React.FC<{
  icon: string;
  pageLink: string;
}> = props => {
  return (
    <IonButtons slot="end">
      <IonButton routerLink={props.pageLink}>
        <IonIcon slot="icon-only" icon={props.icon} />
      </IonButton>
    </IonButtons>
  );
};

export default ToolbarAction;