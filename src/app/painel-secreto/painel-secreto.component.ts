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
      title: 'Guerra de Gangues Prevista',
      description: 'Guerra de Gangues na rua Jig Jig foi prevista na noite do dia 24/09.',
      details: 'Os Tyger Claws pretendem iniciar uma guerra com as Mox pelo território da Rua Jig Jig. Como é previsível que danos colaterais ocorram no processo, foi solicitado a assistência de dois combatentes e dois médicos no local.',
      manager: 'Gabriel',
      level: 4,
      status: 0
    },
    {
      id: 2,
      title: 'Vítimas de guerra civil',
      description: 'Guerra civil em Arroyo deixa moradores de rua e cidadãos locais extrmemante feridos.',
      details: 'Na madrugada de hoje (05/06/2077 - 02:12) uma guerra civil entre os Lobos e a Militech na favela da rua 12 de Arroyo. Vários civis e moradores de rua foram atingidos no fogo cruzado. Solicitado assitência de três médicos e um combatente no local.',
      manager: 'Mathias',
      level: 3,
      status: 1
    }
  ];

  selectedMissionId: number | null = null;

  toggleDetails(missionId: number) {
    if (this.selectedMissionId === missionId) {
      this.selectedMissionId = null;
    } else {
      this.selectedMissionId = missionId;
    }
  }
}
