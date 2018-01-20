export interface Email {
  id: number;
  video_id: number;
  sent: boolean;
  subject: string;


  template_id: string;
  created_at: string;
  updated_at: string;
  html: string;
  title: string;
  cta_id: string;
}
