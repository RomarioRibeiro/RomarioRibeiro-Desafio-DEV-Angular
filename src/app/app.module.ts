import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { FarmModule } from './pages/farm/farm.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FarmeService } from './pages/farm/farm.service';
import { MessageService } from 'primeng/api';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalService } from './pages/animal/animal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNGModule,
    FarmModule,
    HttpClientModule,
    CoreModule

  ],

  providers: [FarmeService, AnimalService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
