import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
  IonLoading,
  IonTextarea
} from "@ionic/react";
import NavHeader from "../../components/Header/NavHeader";



const helps = (props) => {
  return (
    <IonPage>
      
      <NavHeader title="Help and Support" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput
            name="first name"
            type="text"
            required
          ></IonInput>
          </IonItem>
          <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput
            name="last name"
            type="text"
            required
          ></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">E-mail</IonLabel>
          <IonInput
            name="e-mail"
            required
          ></IonInput>
          </IonItem>
          <IonItem>
          <IonLabel position="floating">Message</IonLabel>
          <IonTextarea 
            required
          ></IonTextarea>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
            >Send Message
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default helps;
