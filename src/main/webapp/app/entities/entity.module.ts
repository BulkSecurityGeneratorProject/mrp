import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MrpMovieModule } from './movie/movie.module';
import { MrpReviewModule } from './review/review.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MrpMovieModule,
        MrpReviewModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MrpEntityModule {}
