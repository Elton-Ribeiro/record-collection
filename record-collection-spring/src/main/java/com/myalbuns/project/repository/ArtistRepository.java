package com.myalbuns.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myalbuns.project.model.Artist;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {

}
