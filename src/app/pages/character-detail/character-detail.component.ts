import { Component, OnInit } from '@angular/core';
import { BbApiService } from 'src/app/services/bb-api.service';
import { CharacterData } from 'src/app/data-model/character-data';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styles: [
  ]
})
export class CharacterDetailComponent implements OnInit {  
  personaje! : CharacterData;
  personaje2! : CharacterData[];

  constructor(
    private bbApi: BbApiService,
    private route: ActivatedRoute,
    private pageTitle: Title
  ) { 
    pageTitle.setTitle("Breaking Bad Series Character");
    this.getCharacter();
  }

  ngOnInit(): void {
  }

  async getCharacter(){// Recuperar los datos del Personaje    

    let id = this.route.snapshot.paramMap.get("charId")!;

    if (id.length<=0){
      return;
    }

    await this.bbApi.GetCharacter(id).subscribe(data=>{
      this.personaje2 = data;
      this.personaje = this.personaje2[0];
      console.log(this.personaje);
    });
    
  }

}
