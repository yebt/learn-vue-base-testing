export interface ChatMessage {
  id: string;
  text: string;
  isSentByUser: boolean;
  image?: string;
}
