package com.projetoftt.gerenciarVeiculos.veiculo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/veiculos")
@CrossOrigin(origins = "*")
public class VeiculoController{

    @Autowired
    VeiculoService veiculoService;

    @GetMapping
    public ResponseEntity<?> buscarTodos() {
        List<Veiculo> trazerVeiculos = veiculoService.buscarPorTodos();
        return new ResponseEntity<Object>(trazerVeiculos, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> buscarPeloId(@PathVariable("id") Veiculo veiculo) {
        if (veiculoService.buscarPorId(veiculo.getId()) != null) {
            return new ResponseEntity<Object>(veiculo, HttpStatus.OK);
        } else {
            return new ResponseEntity<Object>(veiculo, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Veiculo veiculo){
        veiculoService.salvar(veiculo);
        return new ResponseEntity<Object>("salvou", HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> alterar(@RequestBody Veiculo veiculo) {
        if (veiculo.getId() != 0) {
            veiculoService.salvar(veiculo);
            return new ResponseEntity<Object>("alterou", HttpStatus.OK);
        } else {
            return new ResponseEntity<Object>("nao alterou", HttpStatus.OK);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable long id) {
        veiculoService.deletar(id);
        return new ResponseEntity<Object>("deletou", HttpStatus.OK);
    }

}
