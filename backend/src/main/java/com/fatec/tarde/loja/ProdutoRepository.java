package com.fatec.tarde.loja;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository 
    extends JpaRepository<Produto,Integer> {

    @Query(value="select * from produto where quantidade >= 1", nativeQuery = true)
    public List<Produto> listarVitrine();

    @Query(value="select * from produto where nome like ?1 or descritivo like ?1", nativeQuery = true)
    public List<Produto> fazerBusca(String termo);
}
