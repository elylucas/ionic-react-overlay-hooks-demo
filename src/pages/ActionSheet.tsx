import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from '@ionic/react';

const ActionSheet: React.FC = () => {
  const [present] = useIonActionSheet();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ActionSheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
            })
          }
        >
          Show ActionSheet Hook
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'heeloo')
          }
        >
          Show ActionSheet Hook with params
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ActionSheet;
