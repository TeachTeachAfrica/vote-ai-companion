import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  title: string;
  description?: string;
  options: PollOption[];
  totalVotes: number;
  expiresAt: string;
}

interface PollCardProps {
  poll: Poll;
}

export function PollCard({ poll }: PollCardProps) {
  const isExpired = new Date(poll.expiresAt) < new Date();
  
  return (
    <Card className="bg-gradient-card shadow-card border-0 hover:shadow-primary transition-smooth">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground line-clamp-2">
              {poll.title}
            </CardTitle>
            {poll.description && (
              <CardDescription className="mt-2 text-muted-foreground line-clamp-2">
                {poll.description}
              </CardDescription>
            )}
          </div>
          {isExpired && (
            <Badge variant="destructive" className="shrink-0">
              Expired
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{poll.totalVotes} votes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Expires {new Date(poll.expiresAt).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Options:</p>
            <div className="grid grid-cols-2 gap-2">
              {poll.options.slice(0, 4).map((option) => (
                <div 
                  key={option.id}
                  className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            asChild 
            className="w-full transition-smooth"
            disabled={isExpired}
            variant={isExpired ? "secondary" : "default"}
          >
            <Link to={`/polls/${poll.id}`}>
              {isExpired ? "View Results" : "Vote Now"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}