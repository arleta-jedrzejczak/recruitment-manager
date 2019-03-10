import { NgModule } from '@angular/core';

// FIXME: Add to shared module
import { MaterialModule } from '.././material';

import { HeaderComponent } from './nav/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export class CoreModule { }
