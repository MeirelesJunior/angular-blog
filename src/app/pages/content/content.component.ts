import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    photoCover:string = "https://lucianapombo.com.br/hf-conteudo/uploads/posts/2023/09/154521_684669-jpg.jpg"

    contentTitle:string = ""

    contentDescription:string ="hello"

    private id:string | null ="0"


    constructor(
      private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      this.route.paramMap.subscribe(value =>
          this.id=value.get("id")
        )

       this.setValeuesToComponent(this.id)
    }

    setValeuesToComponent(id:string | null){
      const result = dataFake.filter(article => article.id == id )[0]

         this.contentTitle = result.title
         this.contentDescription = result.description
         this.photoCover = result.photoCover

    }
  }

