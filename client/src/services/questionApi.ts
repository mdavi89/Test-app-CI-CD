import type { Question } from '../models/Question.js';
import dotenv from 'dotenv';

dotenv.config()

const BACKEND_URL = process.env.BACKEND_URL;

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/questions/random`);
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
