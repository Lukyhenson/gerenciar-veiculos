package com.projetoftt.gerenciarVeiculos.core.service;


import com.projetoftt.gerenciarVeiculos.core.exception.GenericException;

import java.util.List;

public interface IService<T> {

    public T save(T obj) throws GenericException;

    public boolean delete(long id) throws GenericException;

    public List<T> findAll();

    public T findOnde(long id) throws GenericException;

    public boolean exists(long id) throws GenericException;

}
