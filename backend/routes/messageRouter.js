import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getMessage, sendMessage } from "../controllers/Message.js";

const  router = express.Router();

router.post("/send/:id",isAuthenticated,sendMessage)
      .get("/:id",isAuthenticated,getMessage);

export default router;