import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, alarm, alertCircle, calendar, ellipse, logoGoogle, logoIonic, newspaper, square, star, triangle } from 'ionicons/icons';
import Alert from './pages/Alert';
import Toast from './pages/Toast';
import ActionSheet from './pages/ActionSheet';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Modal from './pages/Modal';
import Popover from './pages/Popover';
import Picker from './pages/Picker';
import Loading from './pages/Loading';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/alert" component={Alert} exact={true} />
          <Route path="/toast" component={Toast} exact={true} />
          <Route path="/actionsheet" component={ActionSheet} />
          <Route path="/modal" component={Modal} />
          <Route path="/popover" component={Popover} />
          <Route path="/picker" component={Picker} />
          <Route path="/loading" component={Loading} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="alert" href="/alert">
            <IonIcon icon={alertCircle} />
            <IonLabel>Alert</IonLabel>
          </IonTabButton>
          <IonTabButton tab="toast" href="/toast">
            <IonIcon icon={alarm} />
            <IonLabel>Toast</IonLabel>
          </IonTabButton>
          <IonTabButton tab="actionsheet" href="/actionsheet">
            <IonIcon icon={newspaper} />
            <IonLabel>ActionSheet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="modal" href="/modal">
            <IonIcon icon={star} />
            <IonLabel>Modal</IonLabel>
          </IonTabButton>
          <IonTabButton tab="popover" href="/popover">
            <IonIcon icon={logoGoogle} />
            <IonLabel>Popover</IonLabel>
          </IonTabButton>
          <IonTabButton tab="picker" href="/picker">
            <IonIcon icon={logoIonic} />
            <IonLabel>Picker</IonLabel>
          </IonTabButton>
          <IonTabButton tab="loading" href="/loading">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Loading</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
