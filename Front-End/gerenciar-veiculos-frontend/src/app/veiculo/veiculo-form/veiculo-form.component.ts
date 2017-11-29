import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { LayoutDefaultComponent } from "../../layout/layout/layout.component";

import { VeiculoService } from "../veiculo.service";
import { Veiculo } from "../veiculo.model";

@Component({
  selector: "app-veiculo-form",
  templateUrl: "./veiculo-form.component.html",
  styleUrls: ["./veiculo-form.component.css"]
})
export class VeiculoFormComponent implements OnInit {
  veiculo: Veiculo;
  veiculoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public layout: LayoutDefaultComponent,
    public veiculoService: VeiculoService
  ) {}

  ngOnInit() {
    this.veiculo = new Veiculo();

    this.veiculo.id = this.route.snapshot.params["id"];

    this.layout.title =
      this.veiculo.id == null ? "Novo Veiculo" : "Alterar Veiculo";

    this.veiculoForm = this.builder.group(
      {
        id: [],
        nome: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        modelo: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        fabricante: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        detalhes: this.builder.control("", [
          Validators.required,
          Validators.maxLength(200) 
        ])
      },
      {});

      if (this.veiculo.id != null) {
        this.veiculoService.findOne(this.veiculo.id)
          .subscribe(veiculo => {
            //this.selectedEstado = estado;
            this.veiculoForm = this.builder.group(veiculo, {});
          })
      }
  

  }

  salvar(veiculo: Veiculo) {
    this.veiculoService.save(veiculo).subscribe(response => {
      this.redirect();
    });
  }

  public redirect(): void {
    this.router.navigate(['/veiculo']);
  }

}
