// app/api/fithistory/route.js
import { auth } from "@/auth";          // ✅ use your NextAuth helper
import { adminDb } from "@/lib/firebaseAdmin"; // Firebase Admin SDK

// Save new fitness log
export async function POST(req) {
  const session = await auth(); // ✅ replaces getServerSession
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const fitnessData = {
    ...body,
    userEmail: session.user.email,
    createdAt: new Date().toISOString(),
  };

  // Prevent duplicate log for same date
  const existing = await adminDb
    .collection("fithistory")
    .where("userEmail", "==", session.user.email)
    .where("date", "==", body.date)
    .get();

  if (!existing.empty) {
    return new Response(
      JSON.stringify({ error: "Already logged for this date" }),
      { status: 400 }
    );
  }

  await adminDb.collection("fithistory").add(fitnessData);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

// Fetch user’s fitness logs
export async function GET() {
  const session = await auth(); // ✅ replaces getServerSession
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const snapshot = await adminDb
    .collection("fithistory")
    .where("userEmail", "==", session.user.email)
    .orderBy("date", "desc")
    .get();

  const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return new Response(JSON.stringify(docs), { status: 200 });
}
