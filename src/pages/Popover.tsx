import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonPopover,
} from '@ionic/react';

interface PopoverProps {}

const Popover: React.FC<PopoverProps> = () => {
  const [present, dismiss] = useIonPopover(
    <IonList>
      <IonListHeader>Ionic</IonListHeader>
      <IonItem button>Learn Ionic</IonItem>
      <IonItem button>Documentation</IonItem>
      <IonItem button>Showcase</IonItem>
      <IonItem button>GitHub Repo</IonItem>
      <IonItem lines="none" detail={false} button onClick={hide}>
        Close
      </IonItem>
    </IonList>
  );

  function hide() {
    dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          Show Popover with hook
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Popover;
