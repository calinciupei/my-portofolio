import * as functions from "firebase-functions";
import { app } from "../../lib/controller";

// [START export]
// Export the express app as an HTTP Cloud Functions
exports.app = functions.https.onRequest(app);
