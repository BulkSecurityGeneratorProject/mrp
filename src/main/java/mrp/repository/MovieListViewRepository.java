package mrp.repository;

import mrp.domain.MovieListView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface MovieListViewRepository extends JpaRepository<MovieListView, Long> {
}
