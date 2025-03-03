import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
})
export class MenuUsuarioComponent implements OnInit {

  opened = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit() {
    if (window.innerWidth < 768) {
      //this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      //this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  //onResize(event) {
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 768) {
      //this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      //this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

}
