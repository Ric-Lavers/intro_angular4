import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})

export class CourseComponent{
    title = "list of courses";
    courses = ["Math", "Science", "English"];

    // Locgic for calling a server
}