import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";

const pollSchema = z.object({
  title: z.string().min(1, "Poll title is required"),
  description: z.string().optional(),
  options: z.array(
    z.object({
      text: z.string().min(1, "Option text cannot be empty"),
    })
  ).min(2, "At least 2 options are required"),
  expiresAt: z.string().min(1, "Expiration date is required"),
});

type PollFormData = z.infer<typeof pollSchema>;

export default function PollForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PollFormData>({
    resolver: zodResolver(pollSchema),
    defaultValues: {
      title: "",
      description: "",
      options: [
        { text: "" },
        { text: "" },
      ],
      expiresAt: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options",
  });

  const watchedOptions = form.watch("options");
  const watchedTitle = form.watch("title");
  
  // Check if form is valid for submit button state
  const isFormValid = 
    watchedTitle.trim().length > 0 && 
    watchedOptions.length >= 2 && 
    watchedOptions.every(option => option.text.trim().length > 0) &&
    form.watch("expiresAt").length > 0;

  const onSubmit = async (data: PollFormData) => {
    setIsSubmitting(true);
    
    try {
      // Mock API call - replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Poll Created!",
        description: "Your poll has been created successfully.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create poll. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">
            Create New Poll
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Create a new poll and start gathering opinions from your audience.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poll Title</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What would you like to ask?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Provide additional context for your poll..."
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive text-sm" />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FormLabel>Poll Options</FormLabel>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => append({ text: "" })}
                    className="text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Option
                  </Button>
                </div>
                
                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`options.${index}.text`}
                    render={({ field: inputField, fieldState }) => (
                      <FormItem>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <FormControl>
                              <Input
                                placeholder={`Option ${index + 1}`}
                                {...inputField}
                              />
                            </FormControl>
                            {fieldState.error && (
                              <p className="text-destructive text-sm mt-1">
                                {fieldState.error.message}
                              </p>
                            )}
                          </div>
                          {fields.length > 2 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => remove(index)}
                              className="shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <FormField
                control={form.control}
                name="expiresAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiration Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive text-sm" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full transition-smooth"
                size="lg"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Creating Poll..." : "Create Poll"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}