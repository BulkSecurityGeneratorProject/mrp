import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IReview } from 'app/shared/model/review.model';
import { ReviewService } from './review.service';

@Component({
    selector: 'jhi-review-update',
    templateUrl: './review-update.component.html'
})
export class ReviewUpdateComponent implements OnInit {
    review: IReview;
    isSaving: boolean;

    constructor(private jhiAlertService: JhiAlertService, private reviewService: ReviewService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ review }) => {
            this.review = review;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.review.id !== undefined) {
            this.subscribeToSaveResponse(this.reviewService.update(this.review));
        } else {
            this.subscribeToSaveResponse(this.reviewService.create(this.review));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IReview>>) {
        result.subscribe((res: HttpResponse<IReview>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
