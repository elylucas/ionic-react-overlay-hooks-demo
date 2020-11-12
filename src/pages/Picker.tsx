import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonPicker,
} from '@ionic/react';

interface PickerProps {}

const Picker: React.FC<PickerProps> = () => {
  const [present] = useIonPicker();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Picker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [
                {
                  text: 'Confirm',
                  handler: (value) => {
                    console.log(`Got Value `, value);
                  },
                },
              ],
              columns: [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
              ],
            })
          }
        >
          Show Picker with hook
        </IonButton>
        <IonButton
          expand="block"          
          onClick={() =>
            present(
              [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
                {
                  name: 'vehicle',
                  options: [
                    { text: 'Car', value: 'car' },
                    { text: 'Truck', value: 'truck' },
                    { text: 'Bike', value: 'bike' },
                  ],
                },
              ],
              [
                {
                  text: 'Confirm',
                  handler: (value) => {
                    console.log(`Got Value `, value);
                  },
                },
              ]
            )
          }
        >
          Show Picker with hook params
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Picker;
