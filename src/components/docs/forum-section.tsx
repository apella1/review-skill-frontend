import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export function ForumSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Community Forum</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Discussion
        </Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search discussions..." className="max-w-sm" />
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4">
        {/* Example forum posts */}
        <Card>
          <CardHeader>
            <CardTitle>How to organize flashcards effectively?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Looking for tips on organizing large sets of flashcards...
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>Posted by @user123</span>
              <span>2 days ago</span>
              <span>12 replies</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
