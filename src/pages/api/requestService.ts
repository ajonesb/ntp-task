// api/requestService.ts
export interface RequestData {
    name: string;
    kpiName: string;
    reason: string;
  }
  
  export const requestService = {
    submitRequest: async (data: RequestData): Promise<{ success: boolean }> => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Log the request
        console.log('Request submitted:', {
          timestamp: new Date().toISOString(),
          ...data,
        });
  
        return { success: true };
      } catch (error) {
        console.error('Error submitting request:', error);
        throw error;
      }
    }
  };