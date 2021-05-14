import NewReview from "./newReview.interface";

interface Review extends NewReview {
    id: number;
    created: number;
}

export default Review;