import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react';

const Alert: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alert</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Alert',
              message: 'alert from hook',
              buttons: [
                'Cancel',
                { text: 'Ok', handler: (d) => console.log('ok presses') },
              ],
              onDidDismiss: (e) => console.log('did dismiss')
            })
          }
        >
          Show Alert Hook
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello with params', [{ text: 'Ok' }])}
        >
          Show Alert Hook with params
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Alert;
