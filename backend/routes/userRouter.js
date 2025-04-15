import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/User.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const  router = express.Router();

router.get("/",isAuthenticated,getOtherUsers)
      .post("/register",register)
      .post("/login",login)
      .get("/logout",logout);

export default router;