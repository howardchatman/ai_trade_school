import { Resend } from 'resend';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn('RESEND_API_KEY not set — skipping email');
    return null;
  }
  return new Resend(key);
}

const from = process.env.RESEND_FROM_EMAIL || 'AI Trade School <support@aitradeschool.org>';
const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aitradeschool.org';

export async function sendWelcomeEmail(to: string, firstName: string) {
  const resend = getResend();
  if (!resend) return;

  return resend.emails.send({
    from,
    to,
    subject: 'Welcome to AI Trade School',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Welcome, ${firstName}!</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 24px;">
          Your AI Trade School account is ready. You have instant access to our free AI Essentials course — no credit card needed.
        </p>
        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 24px;">
          When you are ready to go deeper, check out our project workshops ($99 each) or the full AI Platform Builder program ($497).
        </p>
        <a href="${siteUrl}/app" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 16px;">
          Go to Your Dashboard
        </a>
        <p style="font-size: 14px; color: #999; margin-top: 32px; line-height: 1.5;">
          Questions? Reply to this email — we read every message.<br/>
          — AI Trade School
        </p>
      </div>
    `,
  });
}

export async function sendPurchaseConfirmation(
  to: string,
  firstName: string,
  courseName: string,
  amountCents: number
) {
  const resend = getResend();
  if (!resend) return;

  const price = `$${(amountCents / 100).toFixed(0)}`;

  return resend.emails.send({
    from,
    to,
    subject: `You're in: ${courseName}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">You're in, ${firstName}!</h1>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <p style="font-size: 14px; color: #999; margin: 0 0 4px 0;">Course</p>
          <p style="font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">${courseName}</p>
          <p style="font-size: 14px; color: #999; margin: 0 0 4px 0;">Amount</p>
          <p style="font-size: 18px; font-weight: 600; margin: 0;">${price}</p>
        </div>
        <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 24px;">
          Your course is unlocked and ready. Jump in whenever you are — lifetime access, no rush.
        </p>
        <a href="${siteUrl}/app/courses" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 16px;">
          Start Learning
        </a>
        <p style="font-size: 14px; color: #999; margin-top: 32px; line-height: 1.5;">
          Your receipt is available in your Stripe billing portal.<br/>
          Questions? Reply to this email.<br/>
          — AI Trade School
        </p>
      </div>
    `,
  });
}
