import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { ResultsComponent } from "./results.component";
import { SearchComponent } from "../../components/search.component";
import { routing } from "./results.routing";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        routing,
        NgSemanticModule,
    ],
    declarations: [
        ResultsComponent,
        SearchComponent
    ],
    bootstrap: [
        ResultsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ResultsModule { }
