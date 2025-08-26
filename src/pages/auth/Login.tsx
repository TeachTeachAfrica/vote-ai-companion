import { LoginForm } from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-white/80 hover:text-white transition-smooth mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;