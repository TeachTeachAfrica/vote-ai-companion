import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

// Mock poll data
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
  }
];

const voteSchema = z.object({
  selectedOption: z.string().min(1, "Please select an option"),
});

type VoteFormData = z.infer<typeof voteSchema>;

export default function PollDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOptionText, setSelectedOptionText] = useState("");

  const poll = mockPolls.find(p => p.id === id);

  const form = useForm<VoteFormData>({
    resolver: zodResolver(voteSchema),
    defaultValues: {
      selectedOption: "",
    },
  });

  if (!poll) {
    return <Navigate to="/404" replace />;
  }

  const onSubmit = (data: VoteFormData) => {
    const selectedOption = poll.options.find(opt => opt.id === data.selectedOption);
    setSelectedOptionText(selectedOption?.text || "");
    setHasVoted(true);
    
    toast({
      title: "Vote Submitted!",
      description: `You voted for: ${selectedOption?.text}`,
    });
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Thank you for your vote!
                </h1>
                <p className="text-muted-foreground mb-4">
                  You voted for: <span className="font-semibold text-foreground">{selectedOptionText}</span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Results will be available soon. Check back later to see how others voted!
                </p>
                <Button 
                  variant="default" 
                  onClick={() => window.history.back()}
                  className="transition-smooth"
                >
                  Back to Polls
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-foreground">
                {poll.title}
              </CardTitle>
              {poll.description && (
                <CardDescription className="text-lg text-muted-foreground">
                  {poll.description}
                </CardDescription>
              )}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{poll.totalVotes} votes</span>
                <span>•</span>
                <span>Expires: {new Date(poll.expiresAt).toLocaleDateString()}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="selectedOption"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-3"
                          >
                            {poll.options.map((option) => (
                              <div 
                                key={option.id} 
                                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-smooth cursor-pointer"
                                onClick={() => field.onChange(option.id)}
                              >
                                <RadioGroupItem value={option.id} id={option.id} />
                                <Label 
                                  htmlFor={option.id} 
                                  className="flex-1 cursor-pointer font-medium"
                                >
                                  {option.text}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={!form.watch("selectedOption")}
                  >
                    Submit Vote
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}