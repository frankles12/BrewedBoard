// Placeholder for beer information service
const BeerInfoService = {
  getBeerInfo: async (barcode: string) => {
    // In a real implementation, this would fetch data from a backend API
    console.log(`Fetching beer info for barcode: ${barcode}`);
    return {
      name: 'Placeholder Beer',
      brewery: 'Placeholder Brewery',
      artwork: 'https://via.placeholder.com/150',
    };
  },
};

export default BeerInfoService; 