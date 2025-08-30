# Polling App - AI Assistant Rules

## Project Structure Rules

1. **Organize by feature**: Place poll-related components in `/src/components/polls/`, authentication in `/src/components/auth/`, and shared UI in `/src/components/ui/`

2. **Create focused pages**: New pages go in `/src/pages/` with clear naming (e.g., `/src/pages/polls/CreatePoll.tsx`, `/src/pages/polls/PollResults.tsx`)

3. **API logic separation**: Keep API calls in `/src/lib/api/` with service files (e.g., `pollService.ts`, `authService.ts`)

## Form and UI Rules

4. **Always use react-hook-form**: All forms must use `react-hook-form` with `zod` validation and `@hookform/resolvers/zod`

5. **Use shadcn/ui components**: Leverage existing UI components from `/src/components/ui/` and customize variants rather than creating new components

6. **Form structure pattern**: 
   ```tsx
   // Use this pattern for all forms
   const form = useForm<FormSchema>({
     resolver: zodResolver(formSchema),
     defaultValues: { ... }
   })
   ```

## Supabase Integration Rules

7. **Database operations**: All database interactions must go through Supabase client with proper error handling and loading states

8. **Authentication flow**: Use Supabase auth with protected routes and auth context provider

9. **RLS policies**: Always consider Row Level Security when creating database operations

## Component Creation Rules

10. **Poll form example**: When creating poll submission forms, include title, description, options array, and expiration date fields

11. **Responsive design**: All components must be mobile-first with Tailwind responsive prefixes

12. **Toast notifications**: Use toast notifications for user feedback on form submissions and errors

## Code Quality Rules

13. **TypeScript strict**: All components must have proper TypeScript types and interfaces

14. **Error boundaries**: Wrap async operations with proper error handling and user-friendly error messages

15. **Loading states**: Always provide loading indicators for async operations

## File Naming Conventions

16. **Component files**: Use PascalCase for components (e.g., `CreatePollForm.tsx`)

17. **Utility files**: Use camelCase for utilities and services (e.g., `pollUtils.ts`)

18. **Page files**: Match route structure with clear naming (e.g., `polls/[id].tsx`)