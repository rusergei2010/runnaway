import React from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
function Home() {

    const testfunction = () => {
        console.log(123)
        console.log('Sergei')
        return 'No Again Something 12345 90 150'
    }

    const click = (event : any) : void => {
        console.log("wer", event)
    }
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">This is the menu content.</IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">It works {testfunction()} now tap the button in the toolbar to open the menu.</IonContent>
                <IonButton onClick={click}>Click Me</IonButton>
            </IonPage>
        </>
    );
}
export default Home;