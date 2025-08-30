import { Header } from "@/components/layout/Header";
import { PollCard } from "@/components/polls/PollCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock polls data
const mockPolls = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Help us understand developer preferences in 2024",
    options: [
      { id: "opt1", text: "JavaScript", votes: 45 },
      { id: "opt2", text: "Python", votes: 32 },
      { id: "opt3", text: "TypeScript", votes: 28 },
      { id: "opt4", text: "Rust", votes: 15 },
    ],
    totalVotes: 120,
    expiresAt: "2024-12-31",
  },
  {
    id: "2", 
    title: "Best framework for web development?",
    description: "Share your experience with modern web frameworks",
    options: [
      { id: "opt1", text: "React", votes: 65 },
      { id: "opt2", text: "Vue", votes: 42 },
      { id: "opt3", text: "Angular", votes: 38 },
      { id: "opt4", text: "Svelte", votes: 25 },
    ],
    totalVotes: 170,
    expiresAt: "2024-12-25",
  },
  {
    id: "3",
    title: "Preferred code editor?",
    description: "Which editor do you use for daily development?",
    options: [
      { id: "opt1", text: "VS Code", votes: 88 },
      { id: "opt2", text: "WebStorm", votes: 22 },
      { id: "opt3", text: "Sublime Text", votes: 15 },
      { id: "opt4", text: "Vim/Neovim", votes: 18 },
    ],
    totalVotes: 143,
    expiresAt: "2024-11-30",
  }
];

export default function PollList() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Active Polls
              </h1>
              <p className="text-muted-foreground">
                Participate in polls and share your opinion with the community
              </p>
            </div>
            <Button variant="default" className="transition-smooth">
              <Plus className="w-4 h-4 mr-2" />
              Create Poll
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}