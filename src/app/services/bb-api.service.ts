import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { CharacterData } from '../data-model/character-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BbApiService {

  constructor(
    private http: HttpClient
  ) { }

  GetCharacters():Observable<CharacterData[]>{
    let urlAPI = environment.apiUrl + "characters";
    return this.http.get<CharacterData[]>(urlAPI);
  }//end GetCharacters
  
  GetCharactersBreakingBad():Observable<CharacterData[]>{
    let urlAPI = environment.apiUrl + "characters?category=Breaking+Bad";
    return this.http.get<CharacterData[]>(urlAPI);
  }//end GetCharacters BreakingBad
  
  GetCharactersBetterCallSaul():Observable<CharacterData[]>{
    let urlAPI = environment.apiUrl + "characters?category=Better+Call+Saul";
    return this.http.get<CharacterData[]>(urlAPI);
  }//end GetCharacters GetCharactersBetterCallSaul
  
  GetCharacter(id: string):Observable<CharacterData[]>{
    let urlAPI = environment.apiUrl+"characters/"+id;
    return this.http.get<CharacterData[]>(urlAPI);
  }//end GetCharacter

}
