import { analyzeReviews } from "../../lib/sentiment";

export default async function handler(req, res) {

  const { reviews } = req.body;

  if (!reviews) {
    return res.status(400).json({ error: "Reviews required" });
  }

  try {

    const result = analyzeReviews(reviews);

    res.status(200).json({
      summary: `Audience sentiment appears ${result.classification}.`,
      classification: result.classification,
    });

  } catch (error) {

    res.status(500).json({ error: "Sentiment analysis failed" });

  }
}