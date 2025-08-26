import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Vote, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-bounce">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PollMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/polls"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/polls") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Browse Polls
            </Link>
            <Link
              to="/create"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/create") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Create Poll
            </Link>
            <Link
              to="/analytics"
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive("/analytics") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Analytics
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/polls"
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive("/polls") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Polls
              </Link>
              <Link
                to="/create"
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive("/create") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create Poll
              </Link>
              <Link
                to="/analytics"
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive("/analytics") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Analytics
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-2 pt-3 border-t">
              <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};