'use client';

import { useEffect, useState } from 'react';
import { getAdminTracks, createTrack, updateTrack, deleteTrack } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, Layers } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  sort_order: number;
  is_published: boolean;
  modules: { id: string; lessons: { id: string }[] }[];
}

export default function AdminTracksPage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTrack, setEditingTrack] = useState<Track | null>(null);

  useEffect(() => {
    loadTracks();
  }, []);

  async function loadTracks() {
    setIsLoading(true);
    const data = await getAdminTracks();
    setTracks(data);
    setIsLoading(false);
  }

  async function handleSubmit(formData: FormData) {
    const result = editingTrack
      ? await updateTrack(editingTrack.id, formData)
      : await createTrack(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(editingTrack ? 'Track updated' : 'Track created');
      setIsDialogOpen(false);
      setEditingTrack(null);
      loadTracks();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this track?')) return;

    const result = await deleteTrack(id);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Track deleted');
      loadTracks();
    }
  }

  function openEdit(track: Track) {
    setEditingTrack(track);
    setIsDialogOpen(true);
  }

  function openCreate() {
    setEditingTrack(null);
    setIsDialogOpen(true);
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Tracks</h1>
          <p className="text-muted-foreground">Manage learning tracks</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}>
              <Plus className="mr-2 h-4 w-4" />
              Add Track
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingTrack ? 'Edit Track' : 'Create Track'}
              </DialogTitle>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={editingTrack?.title || ''}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  defaultValue={editingTrack?.slug || ''}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingTrack?.description || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sort_order">Sort Order</Label>
                <Input
                  id="sort_order"
                  name="sort_order"
                  type="number"
                  defaultValue={editingTrack?.sort_order || 0}
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="is_published"
                  name="is_published"
                  defaultChecked={editingTrack?.is_published || false}
                  value="true"
                />
                <Label htmlFor="is_published">Published</Label>
              </div>
              <Button type="submit" className="w-full">
                {editingTrack ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tracks List */}
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : tracks.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <Layers className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No tracks yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {tracks.map((track) => (
            <Card key={track.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    /{track.slug} • {track.modules?.length || 0} modules •{' '}
                    {track.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || 0} lessons
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={track.is_published ? 'default' : 'secondary'}>
                    {track.is_published ? 'Published' : 'Draft'}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={() => openEdit(track)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(track.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              {track.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {track.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
