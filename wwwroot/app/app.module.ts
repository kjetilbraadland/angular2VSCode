import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { CounterComponent } from './counter.component';
import { SpesialComponent } from './spesial.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [AppComponent, CounterComponent, SpesialComponent],
    providers: [
        PersonService,
    ],
    bootstrap: [AppComponent, CounterComponent, SpesialComponent]
})
export class AppModule { }
