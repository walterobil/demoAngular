import { Street } from './../street';
import { City } from './../city';
import { Country } from './../country';
import { ApiCountriesService } from './../api-countries.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-pais',
  templateUrl: './list-pais.component.html',
  styleUrls: ['./list-pais.component.scss'],
})

export class ListPaisComponent implements OnInit {
  isLinear = false;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;


  countries: Country[] = [];
  cities: City[] = [];
  streets: Street[] = [];
  countryAd: string ="";
  cityAd: string ="";
  streetAd: string = "";
  dateAd: string = "";

  ngOnInit() {
    this.initList();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  /* Carga inicial */

  constructor(
    private paisesApi: ApiCountriesService,
    private _formBuilder: FormBuilder,
  ) { }

  /* Inicializar */
  initList() {
    this.countryAd="";
    this.cityAd="";
    this.streetAd="";
    this.dateAd="";
    this.paisesApi.getCountries().subscribe(data=>{
      this.countries=data;
    })
  }

  /* Busca el listado de ciudades por pais */
  getCityByCountry(id: number, name: string)
  {
    this.streets=[];
    this.cityAd="";
    this.streetAd=""
    this.countries.every(country => {
      if (country.id==id)
      {
        this.countryAd=name + " (" + country.code + "); ";
        this.cities=country.cities;
        return false;
      }
      return true;
    });
  }

  /* Busca el listado de calles por pais y ciudad */
  getStreetByCity(id: number, name: string)
  {
    this.cityAd="ciudad de "+name+", ";
    this.streetAd=""
    this.cities.every(city => {
      if (city.id==id)
      {
        this.streets=city.streets;
        return false;
      }
      return true;
    });
  }

  /* Muestra el numero y nombre de calle */
  getNameStreet(id: number, name: string) {
    this.streets.every(street => {
      if (street.id==id) {
        this.streetAd="Calle " + street.streetNumber + " - " +name+", ";
        return false;
      }
      return true;
    });
  }

  /** Fecha seleccionada */
  getDate(vdate: Date) {
    this.dateAd=vdate.toLocaleDateString();
  }

}
