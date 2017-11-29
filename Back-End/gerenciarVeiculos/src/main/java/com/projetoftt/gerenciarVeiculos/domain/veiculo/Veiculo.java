package com.projetoftt.gerenciarVeiculos.domain.veiculo;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "veiculo")
public class Veiculo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "veiculo_id_seq")
    @SequenceGenerator( name = "veiculo_id_seq", sequenceName = "veiculo_id_seq", allocationSize = 1)
    @Column(name = "veiculo_id")
    @Getter
    private long id;

    @NotEmpty
    @Size(max = 50)
    @Column(name = "nome")
    @Getter
    @Setter
    private String nome;

    @Size(max = 50)
    @Column(name = "modelo")
    @Getter
    @Setter
    private String modelo;

    @Size(max = 200)
    @Column(name = "detalhes")
    @Getter
    @Setter
    private String detalhes;

    @Size(max = 50)
    @Column(name = "fabricante")
    @Getter
    @Setter
    private String fabricante;
}
