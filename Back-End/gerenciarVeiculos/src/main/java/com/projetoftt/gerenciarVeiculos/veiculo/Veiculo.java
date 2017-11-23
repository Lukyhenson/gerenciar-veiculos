package com.projetoftt.gerenciarVeiculos.veiculo;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "veiculo")
public class Veiculo implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "veiculo_id_seq")
    @SequenceGenerator(name = "veiculo_id_seq", sequenceName = "veiculo_id_seq", allocationSize = 1)
    @Column(name = "id")
    @Getter
    @Setter
    private long id;

    @Column(name = "nome")
    @Getter
    @Setter
    @NotEmpty
    private String nome;

    @Column(name = "modelo")
    @Getter
    @Setter
    @NotEmpty
    private String modelo;

    @Column(name = "detalhes")
    @Getter
    @Setter
    @NotEmpty
    private String detalhes;

    @Column(name = "fabricante")
    @Getter
    @Setter
    @NotEmpty
    private String fabricante;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getDetalhes() {
        return detalhes;
    }

    public void setDetalhes(String detalhes) {
        this.detalhes = detalhes;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }
}