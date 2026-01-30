import { Search, Bell, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";

interface TopNavProps {
  onOpenCommand: () => void;
}

export function TopNav({ onOpenCommand }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search deals, reports, insights..."
          className="h-10 w-full border-border bg-muted/50 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:bg-muted"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Command trigger */}
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenCommand}
          className="hidden h-9 gap-2 border-border bg-muted/50 px-3 text-muted-foreground hover:bg-muted hover:text-foreground md:flex"
        >
          <Command className="h-3.5 w-3.5" />
          <span className="text-xs">Command</span>
          <kbd className="ml-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </Button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 text-muted-foreground hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Button>

        {/* User */}
        <div className="flex items-center gap-3 border-l border-border pl-3">
          <div className="hidden text-right md:block">
            <p className="text-sm font-medium text-foreground">Alex Morgan</p>
            <p className="text-xs text-muted-foreground">Portfolio Manager</p>
          </div>
          <Avatar className="h-9 w-9 border border-border">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
            <AvatarFallback className="bg-primary/10 text-primary">AM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
