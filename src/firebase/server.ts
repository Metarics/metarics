import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const project_id = import.meta.env.project_id;
const private_key = import.meta.env.private_key.replace(/\\n/g, '\n');
const private_key_id = import.meta.env.private_key_id;
const client_email = import.meta.env.client_email;
const client_id = import.meta.env.client_id;
const auth_uri = import.meta.env.auth_uri;
const token_uri = import.meta.env.token_uri;
const auth_provider_x509_cert_url = import.meta.env.auth_provider_x509_cert_url;
const client_x509_cert_url = import.meta.env.client_x509_cert_url;

const serviceAccount = {
    "type": "service_account",
    "project_id": project_id,
    "private_key_id": private_key_id,
    "private_key": private_key,
    "client_email": client_email,
    "client_id": client_id,
    "auth_uri": auth_uri,
    "token_uri": token_uri,
    "auth_provider_x509_cert_url": auth_provider_x509_cert_url,
    "client_x509_cert_url": client_x509_cert_url,
    "universe_domain": "googleapis.com"
  }  

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});