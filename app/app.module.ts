import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application.component';

@NgModule({
    imports : [BrowserModule],
    declarations : [ApplicationComponent],
    providers : [],
    bootstrap : [ApplicationComponent]
})
export class AppModule {

}