const API_BASE_URL = 'http://127.0.0.1:5000/api';  // Make sure this matches your backend

export const api = {
  async getRecommendations(readingParams) {
    try {
      const response = await fetch(`${API_BASE_URL}/recommend-books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',  // Add this if using cookies
        body: JSON.stringify(readingParams),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get recommendations');
      }
      return await response.json();
    } catch (error) {
      console.error('Error getting recommendations:', error);
      throw error;
    }
  },
};