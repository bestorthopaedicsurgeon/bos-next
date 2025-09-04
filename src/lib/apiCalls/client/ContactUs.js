export const submitContactForm = async (contactData) => {
    try {
      const response = await fetch('/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit contact form');
      }
  
      return result;
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  };

  