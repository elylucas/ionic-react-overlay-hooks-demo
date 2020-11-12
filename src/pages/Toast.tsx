import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonToast,
} from '@ionic/react';
import { star } from 'ionicons/icons';

const Toast: React.FC = () => {
  const [present, dismiss] = useIonToast();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'star', icon: star }],
              message: 'toast from hook, click hide to dismiss',
              onDidDismiss: () => console.log('dismissed'),
              onWillDismiss: () => console.log('will dismiss'),
            })
          }
        >
          Show Toast Hook
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello from string', 1000)}
        >
          Show Toast Hook with params, closes in 1 sec
        </IonButton>
        <IonButton expand="block" onClick={dismiss}>
          Hide Toast Hook
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Toast;
