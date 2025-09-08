import type { Review } from '../generated/prisma';
import { reviewRepository } from '../repositories/review.repository';
import { llmClient } from '../llm/client';

export const reviewService = {
  getReviews(productId: number): Promise<Review[]> {
    return reviewRepository.getReviews(productId);
  },

  async summarizeReviews(productId: number): Promise<string> {
    //  Get the last 10 reviews
    const reviews = await reviewRepository.getReviews(productId, 10);
    const joinedReviews = reviews.map((r) => r.content).join('\n\n');

    // Send the reviews to a LLM
    const prompt = `
    Summarize the following customer reviews into a short paragraph highlighting key themes, both positive and negative: 

    ${joinedReviews}
    `;

    const response = await llmClient.generateText({
      prompt,
      temperature: 0.2,
      maxTokens: 500,
    });

    return response.text;

    // const summary = 'This is a placeholder summary';
    // return summary;
  },
};
