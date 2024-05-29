export interface EmailService {
    sendEmailValidationLink(email: string): Promise<void>;
}