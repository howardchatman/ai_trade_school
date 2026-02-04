'use client';

import { useEffect, useState } from 'react';
import {
  getAdminLessons,
  getAdminModules,
  createLesson,
  updateLesson,
  deleteLesson,
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
import { Plus, Pencil, Trash2, FileText } from 'lucide-react';
import { TIER_LABELS } from '@/lib/constants';

interface Lesson {
  id: string;
  module_id: string;
  slug: string;
  title: string;
  summary: string | null;
  content_md: string | null;
  video_url: string | null;
  duration_minutes: number | null;
  sort_order: number;
  is_published: boolean;
  required_tier: string;
  module: {
    id: string;
    title: string;
    track: { id: string; title: string } | null;
  } | null;
}

interface Module {
  id: string;
  title: string;
  track: { id: string; title: string } | null;
}

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('free');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    const [lessonsData, modulesData] = await Promise.all([
      getAdminLessons(),
      getAdminModules(),
    ]);
    setLessons(lessonsData);
    setModules(modulesData);
    setIsLoading(false);
  }

  async function handleSubmit(formData: FormData) {
    formData.set('module_id', selectedModuleId);
    formData.set('required_tier', selectedTier);

    const result = editingLesson
      ? await updateLesson(editingLesson.id, formData)
      : await createLesson(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(editingLesson ? 'Lesson updated' : 'Lesson created');
      setIsDialogOpen(false);
      setEditingLesson(null);
      setSelectedModuleId('');
      setSelectedTier('free');
      loadData();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this lesson?')) return;

    const result = await deleteLesson(id);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Lesson deleted');
      loadData();
    }
  }

  function openEdit(lesson: Lesson) {
    setEditingLesson(lesson);
    setSelectedModuleId(lesson.module_id);
    setSelectedTier(lesson.required_tier);
    setIsDialogOpen(true);
  }

  function openCreate() {
    setEditingLesson(null);
    setSelectedModuleId(modules[0]?.id || '');
    setSelectedTier('free');
    setIsDialogOpen(true);
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Lessons</h1>
          <p className="text-muted-foreground">Manage course lessons</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate} disabled={modules.length === 0}>
              <Plus className="mr-2 h-4 w-4" />
              Add Lesson
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingLesson ? 'Edit Lesson' : 'Create Lesson'}
              </DialogTitle>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Module</Label>
                  <Select
                    value={selectedModuleId}
                    onValueChange={setSelectedModuleId}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a module" />
                    </SelectTrigger>
                    <SelectContent>
                      {modules.map((module) => (
                        <SelectItem key={module.id} value={module.id}>
                          {module.track?.title} - {module.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Required Tier</Label>
                  <Select value={selectedTier} onValueChange={setSelectedTier}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="builder">Builder</SelectItem>
                      <SelectItem value="all_access">All Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={editingLesson?.title || ''}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    name="slug"
                    defaultValue={editingLesson?.slug || ''}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  rows={2}
                  defaultValue={editingLesson?.summary || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content_md">Content (Markdown)</Label>
                <Textarea
                  id="content_md"
                  name="content_md"
                  rows={8}
                  defaultValue={editingLesson?.content_md || ''}
                  placeholder="Write your lesson content in Markdown..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="video_url">Video URL</Label>
                  <Input
                    id="video_url"
                    name="video_url"
                    type="url"
                    defaultValue={editingLesson?.video_url || ''}
                    placeholder="https://..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration_minutes">Duration (minutes)</Label>
                  <Input
                    id="duration_minutes"
                    name="duration_minutes"
                    type="number"
                    defaultValue={editingLesson?.duration_minutes || ''}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sort_order">Sort Order</Label>
                  <Input
                    id="sort_order"
                    name="sort_order"
                    type="number"
                    defaultValue={editingLesson?.sort_order || 0}
                  />
                </div>
                <div className="flex items-center gap-2 pt-8">
                  <Switch
                    id="is_published"
                    name="is_published"
                    defaultChecked={editingLesson?.is_published || false}
                    value="true"
                  />
                  <Label htmlFor="is_published">Published</Label>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={!selectedModuleId}>
                {editingLesson ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Lessons List */}
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : lessons.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No lessons yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Card key={lesson.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{lesson.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {lesson.module?.track?.title || 'No track'} /{' '}
                    {lesson.module?.title || 'No module'} • /{lesson.slug}
                    {lesson.duration_minutes && ` • ${lesson.duration_minutes}m`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {TIER_LABELS[lesson.required_tier as keyof typeof TIER_LABELS] || lesson.required_tier}
                  </Badge>
                  <Badge variant={lesson.is_published ? 'default' : 'secondary'}>
                    {lesson.is_published ? 'Published' : 'Draft'}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={() => openEdit(lesson)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(lesson.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              {lesson.summary && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">{lesson.summary}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
