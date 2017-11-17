package com.projetoftt.gerenciarVeiculos.repository;

import com.projetoftt.gerenciarVeiculos.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long>, VeiculoRepositoryCustom {
}
