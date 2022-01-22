import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

import serviceAccount from "./firebase-private-key.json";

const config: ServiceAccount = {
  clientEmail: serviceAccount.client_email,
  privateKey: serviceAccount.private_key,
  projectId: serviceAccount.project_id
};

initializeApp({
  credential: cert(config),
});

const FireStore = getFirestore();
const FireStoreTimestamp = Timestamp;

export { FireStore, FireStoreTimestamp};
