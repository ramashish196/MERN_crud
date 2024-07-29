import express from "express";
import Allroutes from "../controller/routeController.js";
const router = express.Router();
router.post("/add", Allroutes.signup);
router.put("/update/:id", Allroutes.updateUser);
router.get("/delete/:id", Allroutes.deleteUser);
router.get("/users", Allroutes.allUser);
router.get("/:id", Allroutes.getUserById);
export default router;
