package com.myalbums.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myalbums.project.model.Artist;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {

}

// O JPARepository tem vários métodos como..
// List<T> findAll();
// List<T> findAll(Sort sort);
// List<T> findAllById(Iterable<ID> ids);
// <S extends T> List<S> saveAll(Iterable<S> entities);