/**
 * Fetches questions for a specific doctor
 * @param {string} doctorId - The ID of the doctor
 * @returns {Promise<Object>} - The questions data or error details
 */
export const getDoctorQuestions = async (doctorId) => {
  try {
    const res = await fetch(`/api/questions?doctorId=${doctorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || 'Failed to fetch questions');
    }

    return { success: true, data: data.data || [] };
  } catch (error) {
    console.error('Error fetching doctor questions:', error);
    return { success: false, error: error.message || 'Failed to fetch questions' };
  }
};

/**
 * Submits a new question to a doctor
 * @param {Object} questionData - The question data including content, doctorId, and isConfidential
 * @returns {Promise<Object>} - The created question or error details
 */
export const submitQuestion = async (questionData) => {
  try {
    const res = await fetch('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || 'Failed to submit question');
    }

    return { success: true, data: data.data };
  } catch (error) {
    console.error('Error submitting question:', error);
    return { success: false, error: error.message || 'Failed to submit question' };
  }
};

/**
 * Submits an answer to a question
 * @param {Object} answerData - The answer data including content and questionId
 * @returns {Promise<Object>} - The created answer or error details
 */
export const submitAnswer = async (answerData) => {
  try {
    const res = await fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answerData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || 'Failed to submit answer');
    }

    return { success: true, data: data.data };
  } catch (error) {
    console.error('Error submitting answer:', error);
    return { success: false, error: error.message || 'Failed to submit answer' };
  }
};

/**
 * Fetches answers for a specific question
 * @param {string} questionId - The ID of the question
 * @returns {Promise<Object>} - The answers data or error details
 */
export const getQuestionAnswers = async (questionId) => {
  try {
    const res = await fetch(`/api/answers?questionId=${questionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || 'Failed to fetch answers');
    }

    return { success: true, data: data.data || [] };
  } catch (error) {
    console.error('Error fetching answers:', error);
    return { success: false, error: error.message || 'Failed to fetch answers' };
  }
};

/**
 * Fetches a single question by ID with its answers
 * @param {string} questionId - The ID of the question
 * @returns {Promise<Object>} - The question with answers or error details
 */
export const getQuestionWithAnswers = async (questionId) => {
  try {
    const res = await fetch(`/api/questions/${questionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || 'Failed to fetch question with answers');
    }

    return { success: true, data: data.data };
  } catch (error) {
    console.error('Error fetching question with answers:', error);
    return { success: false, error: error.message || 'Failed to fetch question with answers' };
  }
};
