export interface postInt {
    userId: string;
    postID: string;
    postDesc: string;
    postPhotos?: string[];
    postComments: { userId: string, comment: string }[];
    postLikes: string[];
    timestamp: number;
}