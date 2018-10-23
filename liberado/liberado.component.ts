import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liberado',
  templateUrl: './liberado.component.html',
  styleUrls: ['./liberado.component.css']
})
export class LiberadoComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

   LogOn() {
         this.router.navigate(['login']);
           }

  ngOnInit() {
  }

  fazerCadastro() {
    const email = this.cadastroForm.get('email').value;
    const password = this.cadastroForm.get('password').value;
  }
}
