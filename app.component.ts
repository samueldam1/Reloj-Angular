import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  currentTime: string = ''; // Inicializamos currentTime con una cadena vacía

  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000) // Este código se ejecuta cada 1000ms;
  }

  updateTime() {
    // Inicialización de la variable currentTime con la hora actual
    const date = new Date();
    const hours = this.formateoDate(date.getHours());
    const minutes = this.formateoDate(date.getMinutes());
    const seconds = this.formateoDate(date.getSeconds());

    this.currentTime = `${hours}:${minutes}:${seconds}`; // Ponemos la variable currentTime en nuestro formato deseado
  }

  private formateoDate(unit: number): string {
    let formatoNuevo: string; // variable local

    if (unit < 10) {
      formatoNuevo = `0${unit}`; // si tiene menos de 2 digitos le añadimos un 0 delante
    } else {
      formatoNuevo = `${unit}`;
    }
    return formatoNuevo;
  }

}
