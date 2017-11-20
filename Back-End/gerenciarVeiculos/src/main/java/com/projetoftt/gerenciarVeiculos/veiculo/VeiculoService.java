package com.projetoftt.gerenciarVeiculos.veiculo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;


    public void salvar(Veiculo veiculo) {
        veiculoRepository.save(veiculo);
    }

    public void alterar(Veiculo veiculo){
        salvar(veiculo);
    }

    public void deletar(Long id) {
        Veiculo veiculo = veiculoRepository.findOne(id);
        if (veiculo != null) {
            veiculoRepository.delete(id);
        }
    }

    public Veiculo buscarPorId(Long id) {
        return veiculoRepository.findOne(id);
    }

    public List<Veiculo> buscarPorTodos() {
        return veiculoRepository.findAll();
    }

}