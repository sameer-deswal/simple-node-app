export interface AuthorizeRequest {
    user: string;
    resource: string;
    action: string;
  }
  
  export interface ApiResponse {
    message?: string;
    status?: string;
    error?: string;
  }
  