import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MISSION } from '../models/mission.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painel-secreto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './painel-secreto.component.html',
  styleUrl: './painel-secreto.component.scss'
})
export class PainelSecretoComponent {
  missions: MISSION[] = [
    {
      id: 1,
      title: 'Missão 1',
      description: 'Descrição da missão 1',
      details: 'Detalhes da missão 1',
      manager: 'Gerente 1',
      level: 1,
      status: 0
    },
    {
      id: 2,
      title: 'Missão 2',
      description: 'Descrição da missão 2',
      details: 'Detalhes da missão 2',
      manager: 'Gerente 2',
      level: 2,
      status: 1
    }
  ];
}
