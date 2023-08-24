import { Router } from "express";
import { AddNote, DeleteNote, RetrieveNotes, RetrieveNotesWithPagination, UpdateNote } from "../controller/noteController.js";
const router = Router();
router.get("/", RetrieveNotes);
router.post("/", AddNote);
router.delete("/:id", DeleteNote);
router.put("/:id", UpdateNote);
router.get("/pagination", RetrieveNotesWithPagination);
export default router;
