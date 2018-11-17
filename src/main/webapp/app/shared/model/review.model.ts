import { IMovie } from 'app/shared/model//movie.model';
import { IUser } from 'app/core/user/user.model';

export interface IReview {
    id?: number;
    stars?: number;
    comment?: string;
    likes?: number;
    dislikes?: number;
    movie?: IMovie;
    user?: IUser;
}

export class Review implements IReview {
    constructor(
        public id?: number,
        public stars?: number,
        public comment?: string,
        public likes?: number,
        public dislikes?: number,
        public movie?: IMovie,
        public user?: IUser
    ) {}
}
