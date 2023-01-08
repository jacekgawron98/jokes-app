import { Injectable } from '@angular/core';
import { JokesBaseService } from './jokesBase.service';

@Injectable({providedIn: 'root'})
export class MockJokesService extends JokesBaseService {
    private _jokes: Joke[] = [];

    override getJokes(): Joke[] {
        if (this._jokes.length === 0) {
            const jokes = MOCK_JOKES.map( joke => {
                const category = MOCK_CATEGORIES.find(cat => cat.id === joke.category);
                return {
                    id: joke.id,
                    content: joke.content,
                    category: category ? category : { id: "none", code: '', name: ''}
                }
            })
            this._jokes = jokes;
        }
        return this._jokes;
    }
    override getRandomJoke(): Joke {
        if(this._jokes.length === 0) {
            this.getJokes();
        }
        return this._jokes[this.getRandomInt(0,this._jokes.length-1)]
    }

    override getCategories(): Category[] {
      return MOCK_CATEGORIES;
    }

    override addJoke(categoryId: string, content: string): boolean {
      if (!categoryId || !content) {
        return false;
      }

      const category = MOCK_CATEGORIES.find(cat => cat.id === categoryId);
      const newJoke = {
        id: this.getUniqueId(4),
        category: category ? category : { id: "none", code: '', name: ''}, 
        content: content
      }  
      this._jokes.push(newJoke)
      return true;
    }

    override deleteJoke(id: string | undefined): boolean {
      if (!id) {
        return false;
      }
      this._jokes = this._jokes.filter(joke => joke.id !== id);
      return true;
    }

    private getRandomInt(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

   private getUniqueId(parts: number): string {
      const stringArr = [];
      for(let i = 0; i< parts; i++){
        const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        stringArr.push(S4);
      }
      return stringArr.join('-');
    }
}

const MOCK_JOKES = [
    {
      "id": "7474274a-e7df-4361-9caa-d6a218761ef4",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Spotyka się dwóch programistów: - Słyszałem, że straciłeś pracę. Jak to jest być bezrobotnym? - To było najgorsze pół godziny mojego życia!"
    },
    {
      "id": "28456933-d56c-4fbe-9a6d-2a6e2549f4c5",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Doktorze, każdej nocy śni mi się jeden i ten sam koszmar. Jestem na Antarktydzie a wokół pełno pingwinów. I ciągle przybywają i przybywają. Zbliżają się do mnie, napierają na mnie, popychają mnie do urwiska i za każdym razem spychają mnie do lodowatej wody. - Normalnie leczymy takie przypadki w jeden dzień. Ale z Panem możemy mieć większe problemy, Panie Gates..."
    },
    {
      "id": "ef652ad3-a817-4384-a891-7f6a706e886b",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Jadą samochodem 3 koledzy i jeden z nich był programistą. Samochód się psuje, pasażerowie siedzą w środku i dywagują: świece, rozrusznik, benzyna, skończył się olej... Nagle programista mówi: a może wyjdźmy z samochodu poczekajmy chwilę i potem wejdźmy :)"
    } ,
    {
      "id": "369bcd86-33bf-46f0-a49f-1ef0af8992bd",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Dlaczego programiści mylą Boże Narodzenie z Halloween ? Bo 25 Dec = 31 Oct"
    },
    {
      "id": "b9ceaf80-6f04-4e5c-b913-d2c061b6095f",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Jak śni programista? - Na JAVIE."
    },
    {
      "id": "1221d29b-87ee-41cc-b495-af5318b85e96",
      "category": "e451c8bc-667e-4b3a-a38e-c4b782ac3751",
      "content": "Jaki jest największy las Na świecie ? - Jasiu odpowiada Las Vegas"
    },
    {
      "id": "572a0a44-4fb4-426a-8efd-e4a85ff74573",
      "category": "e451c8bc-667e-4b3a-a38e-c4b782ac3751",
      "content": "Idzie Jasiu do szkoły i nagle zatrzymuje jadący samochód. Proszę nich Pan podwiezie mnie do szkoły. Ale chłopcze ja jadę w innym kierunku. Tym lepiej. Odpowiada Jaś."
    },
    {
      "id": "0ee24268-12bf-4b1d-9a9c-c9feb2702c5b",
      "category":"e451c8bc-667e-4b3a-a38e-c4b782ac3751",
      "content": "Jasiu idzie z mamą na spacer. Przechodzą przez ZOO. Jasiu widzi jak paw rozkłada swoje pióra. -Mamo! Mamo! Kwitnąca kura!"
    },
    {
      "id": "cc5911a0-11ed-42ea-845c-08fab1f48898",
      "category": "e451c8bc-667e-4b3a-a38e-c4b782ac3751",
      "content": "- Jasiu! Umyj ręce przed wyjściem do szkoły! - Dlaczego? Przecież nie będę się zgłaszać!"
    },
    {
      "id": "6f6b128c-14f0-470b-8848-188598d66a91",
      "category": "8ad0481c-c85c-4b5e-98e0-77711a65f841",
      "content": "Co robi strażak w czasie strajku? - Olewa pożar."
    },
    {
      "id": "13175f45-ee44-4ada-9d54-dcd173e39a9e",
      "category": "8ad0481c-c85c-4b5e-98e0-77711a65f841",
      "content": "Po powrocie z akcji gaszenia pożaru , Komendant pisze raport: \"Zgasiliśmy pożar w oborze. Nie spłonęła żadna krowa, utonęło dziesięć.\""
    }
]

const MOCK_CATEGORIES = [
    {
      "id": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "code": "IT",
      "name": "Informatyczne"
    },
    {
      "id": "e451c8bc-667e-4b3a-a38e-c4b782ac3751",
      "code": "ABOUT_JOHNY",
      "name": "O Jasiu"
    },
    {
      "id": "8ad0481c-c85c-4b5e-98e0-77711a65f841",
      "code": "ABOUT_FIREFIGHTERS",
      "name": "O strażakach"
    }
]