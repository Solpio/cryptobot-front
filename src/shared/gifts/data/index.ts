import { get } from "../../../services/api";
import { Gift } from "../dto/gift.dto.ts";

export const getGifts = () => get<Gift[]>("gifts", {});
