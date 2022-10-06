import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//유저 업데이트
router.put("/:id", verifyToken, update);
//유저 삭제
router.delete("/:id", verifyToken, deleteUser);
//유저 불러오기
router.get("/find/:id", getUser);
//구독
router.put("/sub/:id", verifyToken, subscribe);
//구독 취소
router.put("/unsub/:id", verifyToken, unsubscribe);
//좋아요
router.put("/like/:videoId", verifyToken, like);
//좋아요 취소
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;