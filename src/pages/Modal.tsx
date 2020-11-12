import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';

const Modal: React.FC = () => {
  const [count, setCount] = useState(0);
  const Body: React.FC<{count: number}> = ({count}) => (
    <div>
      count: {count}
      <br />
      <IonButton onClick={() => setCount(count + 1)}>Inc Count</IonButton>
      <br />
      <IonButton onClick={() => dismiss()}>Close</IonButton>
    </div>
  );

  const [present, dismiss] = useIonModal(Body, {count});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() => {
            present({
              cssClass: 'my-class'
            });
          }}
        >
          Show Modal Hook
        </IonButton>
        <div>Count: {count}</div>
      </IonContent>
    </IonPage>
  );
};

export default Modal;
