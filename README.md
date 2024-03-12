# Reloj en tiempo real

Este proyecto de Angular muestra un reloj digital que cambia cada segundo.

---

## Funcionamiento

#### app.component.ts
```ts
currentTime: string = ''; // Inicializamos currentTime con una cadena vacía
```
Inicializamos una variable `currenTime` que guardará el tiempo actual una vez lo hayamos formateado a nuestro gusto.

---

```ts
  updateTime() {
      // Inicialización de la variable currentTime con la hora actual
      const date = new Date();
      const hours = this.formateoDate(date.getHours());
      const minutes = this.formateoDate(date.getMinutes());
      const seconds = this.formateoDate(date.getSeconds());
      
      this.currentTime = `${hours}:${minutes}:${seconds}`; // Ponemos la variable currentTime en nuestro formato deseado
  }
```

El método `updateTime()` sirve para definir las variables locales de `date`, `hours`, `minutes`, `seconds` que usaremos para guardar los valores del tiempo que recogeremos con `date.getXX()`.

Además de recoger los valores de `date` primero los haremos pasar por el método `formateoDate()` el cuál añadirá un 0 delante de los valores que sean de tan solo 1 dígito, haciendo que el valor final sea siempre de 2 dígitos.

```ts
  private formateoDate(unit: number): string {
    let formatoNuevo: string; // variable local
  
    if (unit < 10) {
      formatoNuevo = `0${unit}`; // si tiene menos de 2 digitos le añadimos un 0 delante
    } else {
      formatoNuevo = `${unit}`;
    }
    return formatoNuevo;
  }
```

---

Para hacer que el reloj se actualice lo llamamos haciendo uso del método `ngOnInit()`
```ts
  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000) // Este código se ejecuta cada 1000ms;
  }
```

Este método ejecuta su contenido cada X intervalos. En nuesto caso cada __1000ms__.

> [!IMPORTANT]
> Es necesario importar OnInit así como implementarlo.
> ```ts 
> import { Component, OnInit } from '@angular/core'; 
> ```
> ```ts
> export class AppComponent implements OnInit {
> ```

---

#### app.component.ts

Nuestro reloj será mostrado en nuestro 'html' en un 'h1'.

```html
  <main>
        <div>
          <h1>Reloj: ⏳{{ currentTime }}⏳</h1>
        </div>
  </main>
```
