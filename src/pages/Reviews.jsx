import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ReviewCard from "../components/ReviewCard";
import ReviewModal from "../components/ReviewModal";
import { BASE_API, REVIEWS_ENDPOINT, REVIEWS_BY_USER_ENDPOINT } from "../utils/appConstants";

import UserContext from '../context/UserContext';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const [userReviewState, setUserReviewState] = useState({
    allowUserReview: false
  });

  const { user } = useContext(UserContext);

  useEffect(() => {
    // Getting all user reviews for display
    axios.get(BASE_API + REVIEWS_ENDPOINT)
      .then((res) => {
        console.log('Reviews response:', res);
        setReviews(res.data);
      }, (err) => {
        console.log('Reviews err:', err.response);
      });
  }, [])

  useEffect(() => {
    // Check if current user has already submitted reviews
    if (user) {
      axios.get(BASE_API + REVIEWS_BY_USER_ENDPOINT + `/${user._id.toString()}`)
        .then((res) => {
          console.log('Reviews by user response:', res);
          const userReviews = res.data;
          setUserReviewState({
            allowUserReview: userReviews.length <= 0
          });
        }, (err) => {
          console.log('Reviews by user err:', err.response);
        });
    } else {
      setUserReviewState({
        allowUserReview: false
      });
    }
  }, [user]);

  useEffect(() => {
    setOpenModal(userReviewState.allowUserReview);
  }, [userReviewState]);

  return (    
    <div style={{ backgroundColor: 'rgba(0,0,0, 0.05)', padding: '10px', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', margin: '20px auto', padding: '10px' }}>
          <em>Los padres de familia opinan...</em>
        </h1>
        
        {
          reviews.map((review) =>
            <ReviewCard key={review._id} review={review} />
          )
        }

        <ReviewModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}