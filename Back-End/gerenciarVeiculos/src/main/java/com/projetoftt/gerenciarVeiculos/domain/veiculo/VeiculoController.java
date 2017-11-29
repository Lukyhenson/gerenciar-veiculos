package com.projetoftt.gerenciarVeiculos.domain.veiculo;

import com.projetoftt.gerenciarVeiculos.core.controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/veiculo")
@CrossOrigin(origins = "*")
public class VeiculoController extends ResponseAbstractController {

    @Autowired
    VeiculoService veiculoService;


    @GetMapping
    public ResponseEntity<?> findAll(){
        return jsonResponse(veiculoService.findAll());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable long id){
        Veiculo veiculo = veiculoService.findOnde(id);
        return jsonResponse(veiculo);
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Veiculo veiculo){
        return jsonResponse(veiculoService.save(veiculo));
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Veiculo veiculo){
        return jsonResponse(veiculoService.save(veiculo));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id){
        veiculoService.delete(id);
        return jsonResponse(null);
    }



}
