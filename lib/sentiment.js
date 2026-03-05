import Sentiment from "sentiment";

const sentiment = new Sentiment();

export function analyzeReviews(reviews) {

  let totalScore = 0;

  reviews.forEach((review) => {
    const result = sentiment.analyze(review);
    totalScore += result.score;
  });

  let classification = "Mixed";

  if (totalScore > 3) classification = "Positive";
  if (totalScore < -3) classification = "Negative";

  return {
    score: totalScore,
    classification,
  };
}