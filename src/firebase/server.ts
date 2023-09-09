import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
    "type": "service_account",
    "project_id": "thebrosproj",
    "private_key_id": "13083967f14a38eab25fad17d6c3f78a3e78ddea",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxh/5fEE+VUBRd\nNKs0r50MBoQ3eZcPWz/FNopJ5xsUNMKwnwAgmkJtWUSPfaptW3mo3RKdfGXUGsk1\n7AWb3q2aaKmOgRxxYUI3AoI+RkEwcQpqSldz0W7pfXdqDaYcJaYxfQW78vSEkgxo\nGgkQhskSpnLjyzhhvqm0eMHO6YF+0223WRqShdHSzjoQz++RpdMrIMjGaHzm7yjO\n5bRZhOvNRjWmD0a2mnHIguerxFLzXUNBwQH4ysIkbAbLMZGeSPwmKDQz49O4phDp\nJFSz2EmCc+X+NNOV9nJOybEi281PE/7i8D4TygdZ8J2djhdHpNktXHWuNS3j55YH\nz/J0iKYdAgMBAAECggEAM9oSGCb175jnkb+P38AJIRmIJYHMdq5CpnHDG0m2VYUB\ndj/CdENJ8pE3nqdoDy/ADWugg8HxJe265hZtHvT/hJFcMKSSL6VmBxYi/1hasvDZ\nR2k2OLwrZmQAbEfXQ/JVI7At7BLOiyfzGra7/gk4EkvuU40oBxh+jZkVlj8KVQWk\nBojTRkpBnsFuX1AbLePjp+SsWCz2EE76HhvRWop06WzwdQCRUnI6/9xn4Fjs570Q\nUF3rl7OlV70cX6KvSNFiifG6iiU+ZaFDtgUToL66tVDeBiIFlqj6JyBO1D/OoIuQ\n7YgvmufbJsV0pafD8GCUUqD6Ozo5OkAjS6q/axtVKwKBgQDjFUmLKJyD0b3LDo8t\nvm84jr0Rp+q1rmwI0+MoYr2VTg5dA2JofoXWo15vdRkGQByNwtTcrg6PuXKdJUk5\nE/E+kevU7n8OuSJwAP674IhjerZwFrNFsh/6Kb6DHIBVfOHQ/0YVRy7YKLxMfdO1\nfNrfO3Jl0FpaDYlXmGTGuElpbwKBgQDII1tR/CnISIIC5Wl7N3UzYs2RZ/2+sqaF\nOlSVd9kITN3hXpgbbOTf6dRlUbv3jwCzLSMFI5YFIMnyUjtcH+cgQVwYf0JuVfLe\nniM1LXLaM0PYcc6NdaeON502ROmptw6yu5Z1H7hOPsA5aQMz3s2T9v4Qlglc+3TO\nK0pc8n0rMwKBgQCgpkKtLEHuD8gRi29HkV3lyTWA9CZb+dV8OUqPG6u7oMkQjIBm\nJHxS6Ki6eUEG5vxMXfVxWcH7c9rdya8PrkgRV/JbZY6Fv/vY+Rs9lw9mMT439hdF\ny0pMFJQu9U7lK8AltzLBguZlDgyIoMvRrU66drfrx4bkBoePbMR+wYlOCQKBgEps\ns4HqZtM++3H+Q9p5RhEk1dMTu82Ve80hYuDuX3vxsbUkSyYvuXD28G/5FBA8UoNO\n7q3zjM89YTvGjqJ0jqt1Ar1tXZPQTG+ymN8mloZD+B/eOnRqYzPExKawu7/L/iBD\nF/FYKV6XgT4YKgO4//PdLp+WW8cDD223tYCZACj3AoGAItHyKLtI8j+6Ro4QBYYc\nrh1ygLTGCUFqwCd0PcRUkKMsRq2VGJAGDO0Y19X57D+60wrxVH27nsd7r4KXpMFg\nw9h/BLxm3s9Ii++BqR4Ejn7r+ZNdue+nM5j5zzzpd9yEh+yoaSiEgSk8QOTq+DBM\n8PaKsqgRD/l/MDgKloBIFBI=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-lewzq@thebrosproj.iam.gserviceaccount.com",
    "client_id": "102689665527294055563",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lewzq%40thebrosproj.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }  

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});