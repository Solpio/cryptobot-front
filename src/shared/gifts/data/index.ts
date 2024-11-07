import { get } from "../../../services/api";
import { GiftDTO } from "../dto/gift.dto.ts";

export const getGifts = () => get<GiftDTO[]>("gifts", {});
