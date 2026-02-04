'use client';

import { useEffect, useState } from 'react';
import {
  getAdminModules,
  getAdminTracks,
  createModule,
  updateModule,
  deleteModule,
} from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { Plus, Pencil, Trash2, FolderOpen } from 'lucide-react';

interface Module {
  id: string;
  track_id: string;
  title: string;
  description: string | null;
  sort_order: number;
  is_published: boolean;
  track: { id: string; title: string } | null;
  lessons: { id: string }[];
}

interface Track {
  id: string;
  title: string;
}

export default function AdminModulesPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    const [modulesData, tracksData] = await Promise.all([
      getAdminModules(),
      getAdminTracks(),
    ]);
    setModules(modulesData);
    setTracks(tracksData);
    setIsLoading(false);
  }

  async function handleSubmit(formData: FormData) {
    formData.set('track_id', selectedTrackId);

    const result = editingModule
      ? await updateModule(editingModule.id, formData)
      : await createModule(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(editingModule ? 'Module updated' : 'Module created');
      setIsDialogOpen(false);
      setEditingModule(null);
      setSelectedTrackId('');
      loadData();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this module?')) return;

    const result = await deleteModule(id);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Module deleted');
      loadData();
    }
  }

  function openEdit(module: Module) {
    setEditingModule(module);
    setSelectedTrackId(module.track_id);
    setIsDialogOpen(true);
  }

  function openCreate() {
    setEditingModule(null);
    setSelectedTrackId(tracks[0]?.id || '');
    setIsDialogOpen(true);
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Modules</h1>
          <p className="text-muted-foreground">Manage course modules</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate} disabled={tracks.length === 0}>
              <Plus className="mr-2 h-4 w-4" />
              Add Module
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingModule ? 'Edit Module' : 'Create Module'}
              </DialogTitle>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Track</Label>
                <Select
                  value={selectedTrackId}
                  onValueChange={setSelectedTrackId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    {tracks.map((track) => (
                      <SelectItem key={track.id} value={track.id}>
                        {track.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={editingModule?.title || ''}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingModule?.description || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sort_order">Sort Order</Label>
                <Input
                  id="sort_order"
                  name="sort_order"
                  type="number"
                  defaultValue={editingModule?.sort_order || 0}
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="is_published"
                  name="is_published"
                  defaultChecked={editingModule?.is_published || false}
                  value="true"
                />
                <Label htmlFor="is_published">Published</Label>
              </div>
              <Button type="submit" className="w-full" disabled={!selectedTrackId}>
                {editingModule ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Modules List */}
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : modules.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <FolderOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No modules yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {modules.map((module) => (
            <Card key={module.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {module.track?.title || 'No track'} •{' '}
                    {module.lessons?.length || 0} lessons
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={module.is_published ? 'default' : 'secondary'}>
                    {module.is_published ? 'Published' : 'Draft'}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={() => openEdit(module)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(module.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              {module.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
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
