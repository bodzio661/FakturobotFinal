import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FakturobotFinalSharedModule } from 'app/shared/shared.module';
import { KontrachentComponent } from './kontrachent.component';
import { KontrachentDetailComponent } from './kontrachent-detail.component';
import { KontrachentUpdateComponent } from './kontrachent-update.component';
import { KontrachentDeleteDialogComponent } from './kontrachent-delete-dialog.component';
import { kontrachentRoute } from './kontrachent.route';

@NgModule({
  imports: [FakturobotFinalSharedModule, RouterModule.forChild(kontrachentRoute)],
  declarations: [KontrachentComponent, KontrachentDetailComponent, KontrachentUpdateComponent, KontrachentDeleteDialogComponent],
  entryComponents: [KontrachentDeleteDialogComponent],
})
export class FakturobotFinalKontrachentModule {}
