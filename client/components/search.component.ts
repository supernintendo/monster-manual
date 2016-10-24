import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'search',
    templateUrl: 'templates/components/search.html'
})
export class SearchComponent {
    @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
    search(term: string) {
        this.searchQuery.next(term);
    }
}
