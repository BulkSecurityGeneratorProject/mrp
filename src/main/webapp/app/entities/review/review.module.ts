import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MrpSharedModule } from 'app/shared';
import { MrpAdminModule } from 'app/admin/admin.module';
import {
    ReviewComponent,
    ReviewDetailComponent,
    ReviewUpdateComponent,
    ReviewDeletePopupComponent,
    ReviewDeleteDialogComponent,
    reviewRoute,
    reviewPopupRoute
} from './';
import { RatingModule } from 'primeng/rating';

const ENTITY_STATES = [...reviewRoute, ...reviewPopupRoute];

@NgModule({
    imports: [MrpSharedModule, MrpAdminModule, RouterModule.forChild(ENTITY_STATES), RatingModule],
    declarations: [ReviewComponent, ReviewDetailComponent, ReviewUpdateComponent, ReviewDeleteDialogComponent, ReviewDeletePopupComponent],
    entryComponents: [ReviewComponent, ReviewUpdateComponent, ReviewDeleteDialogComponent, ReviewDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ReviewComponent, ReviewUpdateComponent, ReviewDetailComponent]
})
export class MrpReviewModule {}
