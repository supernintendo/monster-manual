import { Component } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Component({
    selector: "results",
    templateUrl: 'templates/pages/results.html'
})
export class ResultsComponent {
    error: string;
    from: number;
    left: number;
    loading: boolean;
    pageSize: number;
    response: {};
    results: Array<any>;
    term: string;
    constructor(private http: Http) {
        this.from = 0;
        this.left = 0;
        this.results = [];
        this.term = '';

        this.searchQuery(this.term, 0);
    }
    nextPage() {
        var page = (this.left > 0) ? (this.from + this.pageSize) : this.from;

        this.searchQuery(this.term, page);
    }
    prevPage() {
        var page = (this.from - this.pageSize > 0) ? (this.from - this.pageSize) : 0;

        this.searchQuery(this.term, page);
    }
    shouldShowPrevPage() {
        return this.from > 0;
    }
    shouldShowNextPage() {
        return this.left > 0;
    }
    preSearch(term, from) {
        if (term !== this.term) {
            this.term = term;
            this.from = 0;
        } else {
            this.from = from;
        }
        this.loading = true;
    }
    searchQuery(term, from) {
        if (term === this.term && from === this.from) {
            return;
        }
        this.preSearch(term, from);

        return this.http.get(`/api/entities?term=${term}&from=${this.from}`)
                        .map((res: any) => res.json())
                        .subscribe(
                            data => this.setResults(data),
                            err => this.handleError(err),
                            () => null
                        );
    }
    handleError(err) {
        this.loading = false;
    }
    setResults(data) {
        this.left = data.meta.left;
        this.pageSize = data.meta.pageSize;
        this.results = data.results;
        this.loading = false;
    }
}
