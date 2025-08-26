import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, BarChart3, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const stats = {
    totalPolls: 12,
    totalVotes: 347,
    activePolls: 8,
    totalViews: 1240
  };

  const recentPolls = [
    {
      id: 1,
      title: "What's your favorite programming language?",
      status: "active",
      votes: 156,
      createdAt: "2 days ago"
    },
    {
      id: 2,
      title: "Best coffee brewing method",
      status: "active",
      votes: 89,
      createdAt: "1 week ago"
    },
    {
      id: 3,
      title: "Preferred work-from-home schedule",
      status: "closed",
      votes: 234,
      createdAt: "2 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your polls today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Polls</p>
                  <p className="text-2xl font-bold">{stats.totalPolls}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Votes</p>
                  <p className="text-2xl font-bold">{stats.totalVotes}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Polls</p>
                  <p className="text-2xl font-bold">{stats.activePolls}</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <Clock className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold">{stats.totalViews}</p>
                </div>
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary-glow" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/create">
              <Button variant="hero" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Create New Poll
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </Link>
            <Link to="/polls">
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Browse Public Polls
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Polls */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle>Recent Polls</CardTitle>
            <CardDescription>
              Your latest polling activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPolls.map((poll) => (
                <div key={poll.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-smooth">
                  <div className="flex-1">
                    <h3 className="font-medium">{poll.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge 
                        variant={poll.status === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {poll.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {poll.votes} votes • {poll.createdAt}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;