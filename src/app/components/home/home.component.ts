import { Component, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/models/tecnico';
import { HomeService } from '../../services/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../models/cliente';
import { Chamado } from '../../models/chamado';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TEC_ELEMENT_DATA: Tecnico[] = [];
  CLI_ELEMENT_DATA: Cliente[] = [];

  CHA_ELEMENT_DATA: Chamado[] = [];
  CHA_FILTERED_DATA: Chamado[] = [];



  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.findAllTecnicos();
    this.findAllClientes();
    this.findAllChamados();
  }

  findAllTecnicos() {
    this.service.findAllTecnicos().subscribe(resposta => {
      this.TEC_ELEMENT_DATA = resposta;
    })
  }

  findAllClientes() {
    this.service.findAllClientes().subscribe(resposta => {
      this.CLI_ELEMENT_DATA = resposta;
    })
  }

  findAllChamados() {
    this.service.findAllChamados().subscribe(resposta => {
      this.CHA_ELEMENT_DATA = resposta;
    })
  }

  countAllTec(): any {
    return this.TEC_ELEMENT_DATA.length;
  }

  countAllCli(): any {
    return this.CLI_ELEMENT_DATA.length;
  }

  countAllCham(): any {
    return this.CHA_ELEMENT_DATA.length
  }

  countAllChamAndam(): any {
    let list: Chamado[] = []
    this.CHA_ELEMENT_DATA.forEach(element => {
      if(element.status == '1')
      list.push(element)
    })
    this.CHA_FILTERED_DATA = list;
    return this.CHA_FILTERED_DATA.length
  }

  countAllChamEncer(): any {
    let list: Chamado[] = []
    this.CHA_ELEMENT_DATA.forEach(element => {
      if(element.status == '2')
      list.push(element)
    })
    this.CHA_FILTERED_DATA = list;
    return this.CHA_FILTERED_DATA.length
  }

}
