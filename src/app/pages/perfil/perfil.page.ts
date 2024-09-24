import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Usuario {
  username: string;
  email: string;
  edad: number;
  role: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  usuario: Usuario = {
    username: 'Pedro Lara',
    email: 'Pedrolara@example.com',
    edad: 25,
    role: 'Pasajero/Conductor'
  };

  constructor(private router: Router, private alertController: AlertController) {}

  async editarPerfil() {
    const alert = await this.alertController.create({
      header: 'Guardar Cambios',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Nombre', // Placeholder para el campo de nombre
          value: this.usuario.username
        },
        {
          name: 'edad',
          type: 'number',
          placeholder: 'Edad', // Placeholder para el campo de edad
          value: this.usuario.edad
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo', // Placeholder para el campo de correo
          value: this.usuario.email
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Edición cancelada');
          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            this.usuario.username = data.username;
            this.usuario.email = data.email;
            this.usuario.edad = data.edad;
            console.log('Perfil actualizado:', this.usuario);
          }
        }
      ]
    });

    await alert.present();
  }
}
