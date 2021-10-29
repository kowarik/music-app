import { Component } from '@angular/core';

class Song {
    singer: string;
    title: string;

    constructor(singer: string, title: string) {

        this.singer = singer;
        this.title = title;
    }
}

@Component({
    selector: 'music-app',
    template:
    `<div class="page-header">
        <h1> Список музыки и исполнителей </h1>
    </div>

    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="singer" placeholder = "Исполнитель" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="form-control" class="form-control" [(ngModel)]="title" placeholder="Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(singer, title)">Добавить</button>
                </div>
            </div>
        </div>

        <h2>Таблица 1 (назва виконавця)</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Исполнитель</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.singer}}</td>
                </tr>
            </tbody>
        </table>

        <h2>Таблица 2 (виконавець – пісня)</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Исполнитель</th>
                    <th>Название</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.singer}}</td>
                    <td>{{item.title}}</td>
                </tr>
            </tbody>
        </table>

        <h2>Таблица 3 (назва пісні)</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Название</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.title}}</td>
                </tr>
            </tbody>
        </table>

    </div>`
})
export class AppComponent {
    items: Song[] =
        [
            { singer: "Исполнитель1", title: "Название4" },
            { singer: "Исполнитель2", title: "Название3" },
            { singer: "Исполнитель3", title: "Название2" },
            { singer: "Исполнитель4", title: "Название1" }
        ];
    addItem(singer: string, title: string): void {
      if (singer == null || title == null || (singer.trim() == "" && title.trim() == ""))
            return;
        this.items.push(new Song(singer, title));
    }
}
