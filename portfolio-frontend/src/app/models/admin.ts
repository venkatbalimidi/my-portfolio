export interface AdminCredentials {
  username: string;
  password: string;
}

export interface CvDownloadRequest {
  id: number;
  name: string;
  email: string;
  company: string | null;
  reason: string | null;
  consentGiven: boolean;
  requestedAt: string;
}

export interface ContactMessageAdmin {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}