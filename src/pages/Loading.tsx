import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
} from '@ionic/react';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  const [present, dismiss] = useIonLoading();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              message: 'Loading with hook',
              duration: 3000,
            })
          }
        >
          Show Loading hook
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present(undefined, 2000, 'dots')}
        >
          Show Loading hook params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present('loading with params', undefined, 'dots');
            setTimeout(dismiss, 5000);
          }}
        >
          Show Loading hook params and timeout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Loading;
