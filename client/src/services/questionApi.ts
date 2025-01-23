import type { Question } from '../models/Question.js';

const API_BASE_URL = "https://test-app-ci-cd-server.onrender.com";

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/questions/random`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
