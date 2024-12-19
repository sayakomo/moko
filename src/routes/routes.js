import express from "express";
import { komo, getServices } from "../controllers/getServices.js";

const router = express.Router();

router.get('/', komo);
router.put('/', getServices);

export default router;