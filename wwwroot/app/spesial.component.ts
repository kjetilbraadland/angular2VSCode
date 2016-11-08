import {Component, OnInit} from '@angular/core';
import { PersonService, Person } from './person.service';

@Component({
  selector: 'spesial',
  styles: [`
    .spesial {
      position: relative;
    }
    .spesial__input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    .spesial__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 40px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
  template: `
    <div class="spesial">
      <div class="spesial__container">    
        <ul>
          <li *ngFor="let person of persons">
          <strong>{{person.name}}</strong><br>
          from: {{person.city}}<br>
          date of birth: {{person.dob | date: 'dd/MM/yyyy'}}
          </li>
          </ul>
          <button (click)="execute();" class="spesial__button">
          next
        </button>
      </div>
    </div>
  `
})
export class SpesialComponent extends OnInit {
  public numberValue:number = 0;
  public persons: Person[] = [];

constructor(private _service: PersonService) {
        super();
    }

  execute() {
    this._service.getRandom().then(data => {
            this.persons = data;
        })
  } 

  ngOnInit() {
        this._service.getRandom().then(data => {
            this.persons = data;
        })
    }    
}