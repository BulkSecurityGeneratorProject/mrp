package mrp.service.impl;

import mrp.domain.Review;
import mrp.domain.User;
import mrp.repository.ReviewRepository;
import mrp.service.ReviewService;
import mrp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing Review.
 */
@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

    private final Logger log = LoggerFactory.getLogger(ReviewServiceImpl.class);

    private final ReviewRepository reviewRepository;
    private final UserService userService;

    public ReviewServiceImpl(ReviewRepository reviewRepository, UserService userService) {
        this.reviewRepository = reviewRepository;
        this.userService = userService;
    }

    /**
     * Save a review.
     *
     * @param review the entity to save
     * @return the persisted entity
     */
    @Override
    public Review save(Review review) {
        final Optional<User> isUser = userService.getUserWithAuthorities();
        if (!isUser.isPresent()) {
            log.error("User is not logged in");
        }
        final User user = isUser.get();
        review.setUser(user);

        if(review.getId()==null){
            review.setDislikes(0L);
            review.setLikes(0L);
        }
        log.debug("Request to save Review : {}", review);
        return reviewRepository.save(review);
    }

    /**
     * Get all the reviews.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Review> findAll(Pageable pageable) {
        log.debug("Request to get all Reviews");
        return reviewRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Review> findAllByMovie(Pageable pageable, Long id) {
        log.debug("Request to get all Reviews");
        return reviewRepository.findAllByMovieId(pageable, id);
    }


    /**
     * Get one review by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Review> findOne(Long id) {
        log.debug("Request to get Review : {}", id);
        return reviewRepository.findById(id);
    }

    /**
     * Delete the review by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Review : {}", id);
        reviewRepository.deleteById(id);
    }
}
