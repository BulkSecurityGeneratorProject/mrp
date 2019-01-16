package mrp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Movie.
 */
@Entity
@Table(name = "movie_list_view")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MovieListView implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "movie_name")
    private String movieName;

    @Column(name = "director_name")
    private String directorName;

    @Column(name = "year")
    private Long year;

    @Column(name = "number_of_reviews")
    private Long numberOfReviews;

    @Column(name = "rating")
    private Long rating;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public MovieListView movieName(String movieName) {
        this.movieName = movieName;
        return this;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getDirectorName() {
        return directorName;
    }

    public MovieListView directorName(String directorName) {
        this.directorName = directorName;
        return this;
    }

    public void setDirectorName(String directorName) {
        this.directorName = directorName;
    }

    public Long getYear() {
        return year;
    }

    public MovieListView year(Long year) {
        this.year = year;
        return this;
    }

    public void setYear(Long year) {
        this.year = year;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove


    public Long getNumberOfReviews() {
        return numberOfReviews;
    }

    public void setNumberOfReviews(Long numberOfReviews) {
        this.numberOfReviews = numberOfReviews;
    }

    public Long getRating() {
        return rating != null ? rating : 0;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Movie movie = (Movie) o;
        if (movie.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), movie.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Movie{" +
            "id=" + getId() +
            ", movieName='" + getMovieName() + "'" +
            ", directorName='" + getDirectorName() + "'" +
            ", year=" + getYear() +
            "}";
    }
}
