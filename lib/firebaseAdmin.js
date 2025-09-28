// lib/firebaseAdmin.js
import admin from "firebase-admin";

// Prevent re-initialization on hot reloads in Next.js
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

export const adminDb = admin.firestore();
