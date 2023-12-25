// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
import LoginForm from '@/components/forms/LoginForm';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <LoginForm />
  );
}