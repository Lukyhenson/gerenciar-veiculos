package com.projetoftt.gerenciarVeiculos.veiculo;

import com.projetoftt.gerenciarVeiculos.veiculo.Veiculo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    public List<Veiculo> findByNome(String nome);

}