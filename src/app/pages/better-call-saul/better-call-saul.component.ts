import { Component, OnInit } from '@angular/core';
import { BbApiService } from 'src/app/services/bb-api.service';
import { CharacterData } from 'src/app/data-model/character-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-better-call-saul',
  templateUrl: './better-call-saul.component.html',
  styles: [
  ]
})
export class BetterCallSaulComponent implements OnInit {
  charactersData? : CharacterData[];
  charactersDataCopy? : CharacterData[];
  p: number = 1;

  constructor(
    private bbApi: BbApiService,
    private pageTitle: Title
  ) { 
    pageTitle.setTitle("Breaking Bad Characters");
    this.getCharacters();
  }

  ngOnInit(): void {
  }

  async getCharacters(){// Recuperar los datos de los Personajes
    await this.bbApi.GetCharactersBetterCallSaul().subscribe((data) =>{
      this.charactersData = data.map((
        {
          char_id, name, birthday, occupation, img, status, nickname, category
        }:CharacterData)=>{
        return {
          char_id: char_id, 
          name: name,
          birthday: birthday,
          occupation: occupation, 
          img: img, 
          status: status,
          nickname: nickname,
          category: category
        };
  
      });
      
      this.charactersDataCopy = this.charactersData;
      //console.table(this.charactersData);

    });
  }

  filter(e:any){
    const search : string = e.target.value;
    
    this.charactersData = this.charactersDataCopy?.filter(({name}:CharacterData)=>{
      return name?.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }

}
