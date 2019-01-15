import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IReview, Review } from 'app/shared/model/review.model';
import { ReviewService } from './review.service';
import { ReviewComponent } from './review.component';
import { ReviewDetailComponent } from './review-detail.component';
import { ReviewUpdateComponent } from './review-update.component';
import { ReviewDeletePopupComponent } from './review-delete-dialog.component';
import { Movie } from 'app/shared/model/movie.model';

@Injectable({ providedIn: 'root' })
export class ReviewResolve implements Resolve<IReview> {
    constructor(private service: ReviewService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Review> {
        const id = route.params['id'] ? route.params['id'] : null;
        const movieId = route.params['movieid'] ? route.params['movieid'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Review>) => response.ok),
                map((review: HttpResponse<Review>) => review.body)
            );
        }
        const myReview = new Review();
        myReview.movie = new Movie();
        myReview.movie.id = movieId;
        return of(myReview);
    }
}

export const reviewRoute: Routes = [
    {
        path: 'review',
        component: ReviewComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mrpApp.review.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'review/:id/view',
        component: ReviewDetailComponent,
        resolve: {
            review: ReviewResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mrpApp.review.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'review/new/:movieid',
        component: ReviewUpdateComponent,
        resolve: {
            review: ReviewResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mrpApp.review.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'review/:id/edit',
        component: ReviewUpdateComponent,
        resolve: {
            review: ReviewResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mrpApp.review.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const reviewPopupRoute: Routes = [
    {
        path: 'review/:id/delete',
        component: ReviewDeletePopupComponent,
        resolve: {
            review: ReviewResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mrpApp.review.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
