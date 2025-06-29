
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Trash2, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Guide {
  name: string;
  metadata?: {
    size?: number;
  };
  created_at?: string;
}

interface GuideListProps {
  guides: Guide[];
  loading: boolean;
  onRefresh: () => void;
}

export const GuideList = ({ guides, loading, onRefresh }: GuideListProps) => {
  const { toast } = useToast();
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  const deleteGuide = async (fileName: string) => {
    setDeletingFile(fileName);
    try {
      console.log('Deleting file:', fileName);
      const { error } = await supabase.storage
        .from('guides')
        .remove([fileName]);

      if (error) {
        console.error('Delete error:', error);
        throw error;
      }

      toast({
        title: "Guide deleted",
        description: `${fileName} has been removed.`,
      });

      onRefresh(); // Refresh the list
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Delete failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeletingFile(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Uploaded Guides
        </CardTitle>
        <CardDescription>
          Manage your uploaded guide files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button 
            onClick={onRefresh} 
            disabled={loading} 
            variant="outline"
            className="flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Refresh List'
            )}
          </Button>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading guides...</span>
            </div>
          ) : guides.length === 0 ? (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No guides uploaded yet.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {guides.map((guide) => (
                <div key={guide.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{guide.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Size: {guide.metadata?.size ? Math.round(guide.metadata.size / 1024) : 'Unknown'} KB
                      {guide.created_at && (
                        <span className="ml-2">
                          • Uploaded: {new Date(guide.created_at).toLocaleDateString()}
                        </span>
                      )}
                    </p>
                  </div>
                  <Button
                    onClick={() => deleteGuide(guide.name)}
                    variant="destructive"
                    size="sm"
                    disabled={deletingFile === guide.name}
                  >
                    {deletingFile === guide.name ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
