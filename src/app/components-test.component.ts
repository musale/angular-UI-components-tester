import {Component, ElementRef, AfterViewInit} from '@angular/core';

declare var jQuery:any;
declare var moment:any;
@Component({
    moduleId: module.id,
    selector: 'components-test-app',
    templateUrl: 'components-test.component.html',
    styleUrls: ['components-test.component.css']
})
export class ComponentsTestAppComponent implements AfterViewInit {
    title = 'components-test works!';

    constructor(private el:ElementRef) {
    }

    ngAfterViewInit() {
        jQuery(this.el.nativeElement).find('input[name="daterange"]').daterangepicker({
                "showISOWeekNumbers": true,
                "startDate": "05/31/2016",
                "endDate": "06/06/2016",
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            },
            (start, end, label)=> {
                console.log("the selected start date: ", start.format('YYYY-MM-DD'));
                console.log("the selected end date: ", end.format('YYYY-MM-DD'));
                console.log("the selected start date: ", label);
            });
    }
}
