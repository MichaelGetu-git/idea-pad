declare global {
    interface Window {
      Paddle: {
        Setup: (config: { vendor: number; sandbox?: boolean }) => void;
        Checkout: {
          open: (options: {
            product: number;
            successCallback?: () => void;
            closeCallback?: () => void;
            email?: string;
            passthrough?: string;
          }) => void;
        };
        Product?: {
          Prices?: (productId: number, callback: (data: any) => void) => void;
        };
      };
    }
  }
  
  export {};
  