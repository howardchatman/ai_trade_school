import { getUser } from '@/actions/auth';
import { getCertificationsWithProgress } from '@/actions/certifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Clock } from 'lucide-react';

// Custom Progress Bar
function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`h-2 w-full bg-secondary rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-foreground transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export const metadata = {
  title: 'Certifications | AI Trade School',
};

export default async function CertificationsPage() {
  const userData = await getUser();
  if (!userData?.profile) return null;

  const certifications = await getCertificationsWithProgress(userData.profile.id);

  const earnedCount = certifications.filter(
    (c) => c.userCertification?.status === 'earned'
  ).length;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Your Certifications
        </h1>
        <p className="text-muted-foreground">
          Track your progress and earn certifications by completing lessons.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Available</CardDescription>
            <CardTitle className="text-3xl">{certifications.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>In Progress</CardDescription>
            <CardTitle className="text-3xl">
              {certifications.filter(
                (c) =>
                  c.userCertification?.status === 'in_progress' ||
                  (c.progress.completed > 0 && c.progress.completed < c.progress.total)
              ).length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Earned</CardDescription>
            <CardTitle className="text-3xl">{earnedCount}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Certifications List */}
      {certifications.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const isEarned = cert.userCertification?.status === 'earned';
            const isInProgress =
              cert.userCertification?.status === 'in_progress' ||
              (cert.progress.completed > 0 && cert.progress.completed < cert.progress.total);

            return (
              <Card key={cert.id} className={isEarned ? 'border-green-500/30' : ''}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isEarned ? 'bg-green-500/20' : 'bg-secondary'
                      }`}
                    >
                      <Award
                        className={`h-8 w-8 ${
                          isEarned ? 'text-green-400' : 'text-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        {isEarned && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Earned
                          </Badge>
                        )}
                        {isInProgress && !isEarned && (
                          <Badge variant="secondary">
                            <Clock className="mr-1 h-3 w-3" />
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>
                        {cert.progress.completed} / {cert.progress.total} requirements
                      </span>
                    </div>
                    <ProgressBar value={cert.progress.percentage} />
                    {isEarned && cert.userCertification?.earned_at && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Earned on{' '}
                        {new Date(cert.userCertification.earned_at).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <Award className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No certifications available yet</h3>
            <p className="text-muted-foreground">
              New certifications are being added. Check back soon!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
