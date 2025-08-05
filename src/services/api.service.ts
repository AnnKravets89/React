import type {IComment} from "../models/IComment.ts";

export const loadComments = async (): Promise<IComment[]> => {
        return await fetch(import.meta.env.VITE_API_URL)
                .then(value => value.json());
}
