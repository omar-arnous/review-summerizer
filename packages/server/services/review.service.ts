import { reviewRepository } from '../repositories/review.repository';
import { llmClient } from '../llm/client';
import template from '../llm/prompts/summarize-reviews.txt';

export const reviewService = {
  async summarizeReviews(productId: number): Promise<string> {
    const existingSummary = await reviewRepository.getReviewSummary(productId);
    if (existingSummary) {
      return existingSummary;
    }

    //  Get the last 10 reviews
    const reviews = await reviewRepository.getReviews(productId, 10);
    const joinedReviews = reviews.map((r) => r.content).join('\n\n');

    // Send the reviews to a LLM
    const prompt = template.replace('{{reviews}}', joinedReviews);

    // const { text: summary } = await llmClient.generateText({
    //   prompt,
    //   temperature: 0.2,
    //   maxTokens: 500,
    // });

    const summary = await llmClient.summarizeReviews(joinedReviews);

    await reviewRepository.storeReviewSummary(productId, summary);

    // const summary = 'This is a placeholder summary';
    return summary;
  },
};
