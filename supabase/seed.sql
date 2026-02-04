-- AI Trade School Seed Data
-- Run this after running the migration to populate sample data

-- =====================
-- TRACKS
-- =====================
INSERT INTO tracks (id, slug, title, description, sort_order, is_published) VALUES
  ('11111111-1111-1111-1111-111111111111', 'operator', 'Operator Track', 'Learn to leverage AI tools effectively in your daily work. Master prompt engineering, workflow automation, and productivity optimization.', 1, true),
  ('22222222-2222-2222-2222-222222222222', 'builder', 'Builder Track', 'Build AI-powered applications and services. From APIs to full products, learn the technical skills that matter.', 2, true);

-- =====================
-- MODULES - Operator Track
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('aaaa1111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'Foundations of AI', 'Understanding what AI is, how it works, and where it fits in your workflow.', 1, true),
  ('aaaa2222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Prompt Engineering', 'Master the art of communicating with AI to get the results you need.', 2, true);

-- =====================
-- MODULES - Builder Track
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('bbbb1111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'AI APIs & Integration', 'Learn to integrate AI capabilities into your applications using modern APIs.', 1, true),
  ('bbbb2222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', 'Building AI Products', 'From concept to production: building and deploying AI-powered applications.', 2, true);

-- =====================
-- LESSONS - Operator Track - Foundations
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published, required_tier) VALUES
  ('lesson-0101', 'aaaa1111-1111-1111-1111-111111111111', 'what-is-ai', 'What is AI?', 'An introduction to artificial intelligence and its practical applications.',
   'Welcome to AI Trade School! In this lesson, we''ll explore what artificial intelligence really is and how it''s changing the way we work.

Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include understanding language, recognizing patterns, making decisions, and learning from experience.

Key concepts we''ll cover:
- Machine Learning vs. Traditional Programming
- Large Language Models (LLMs)
- Practical AI Applications
- Limitations and Considerations

By the end of this lesson, you''ll have a solid foundation for understanding how AI can enhance your work.',
   15, 1, true, 'free'),

  ('lesson-0102', 'aaaa1111-1111-1111-1111-111111111111', 'ai-landscape', 'The AI Tool Landscape', 'Overview of the major AI tools and platforms available today.',
   'The AI landscape is evolving rapidly. Let''s explore the major categories of AI tools you''ll encounter:

**Text Generation & Chat**
- ChatGPT (OpenAI)
- Claude (Anthropic)
- Gemini (Google)

**Image Generation**
- DALL-E
- Midjourney
- Stable Diffusion

**Code Assistance**
- GitHub Copilot
- Cursor
- Tabnine

**Specialized Tools**
- Notion AI (writing)
- Jasper (marketing)
- Descript (video/audio)

Understanding the strengths of each tool will help you choose the right one for your specific needs.',
   20, 2, true, 'free'),

  ('lesson-0103', 'aaaa1111-1111-1111-1111-111111111111', 'setting-up-tools', 'Setting Up Your AI Toolkit', 'Hands-on guide to getting started with essential AI tools.',
   'Now let''s get practical. In this lesson, you''ll set up accounts and learn the basics of the tools we''ll use throughout this course.

**Step 1: Create Accounts**
Set up accounts for:
- ChatGPT (free tier available)
- Claude (free tier available)

**Step 2: Explore the Interface**
Take 10 minutes to explore each interface. Notice:
- The input area
- Settings and parameters
- History and conversations

**Step 3: Your First Prompts**
Try these starter prompts:
1. "Explain [your job] to a 5-year-old"
2. "What are 5 ways AI could help with [your daily tasks]?"
3. "Create a simple checklist for [a routine task]"

You''re now ready to dive deeper into prompt engineering!',
   25, 3, true, 'operator');

-- =====================
-- LESSONS - Operator Track - Prompt Engineering
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published, required_tier) VALUES
  ('lesson-0201', 'aaaa2222-2222-2222-2222-222222222222', 'prompt-basics', 'Prompt Engineering Basics', 'Learn the fundamentals of writing effective prompts.',
   'Prompt engineering is the skill of communicating effectively with AI. The quality of your output depends largely on the quality of your input.

**The Anatomy of a Great Prompt**

1. **Context**: Provide background information
2. **Task**: Be specific about what you want
3. **Format**: Describe how you want the output
4. **Tone**: Specify the voice and style
5. **Constraints**: Add any limitations or requirements

**Example - Bad Prompt:**
"Write about marketing"

**Example - Good Prompt:**
"You are a marketing expert. Write a 300-word blog post introduction about email marketing for small business owners. Use a friendly, approachable tone. Include 2-3 statistics to build credibility."

Practice: Rewrite one of your common requests using this framework.',
   30, 1, true, 'operator'),

  ('lesson-0202', 'aaaa2222-2222-2222-2222-222222222222', 'advanced-techniques', 'Advanced Prompt Techniques', 'Level up with chain-of-thought, few-shot learning, and more.',
   'Now that you have the basics, let''s explore advanced techniques that will dramatically improve your results.

**Chain-of-Thought Prompting**
Ask the AI to show its reasoning:
"Solve this problem step by step..."

**Few-Shot Learning**
Provide examples of what you want:
"Here are 2 examples of the style I want: [example 1], [example 2]. Now create something similar for..."

**Role-Playing**
Give the AI a specific persona:
"You are a senior software architect with 20 years of experience..."

**Iterative Refinement**
Build on previous outputs:
"That''s good, but make it more concise and add bullet points"

**Negative Prompting**
Specify what to avoid:
"Do not use jargon. Do not exceed 200 words."

These techniques can be combined for powerful results!',
   35, 2, true, 'operator'),

  ('lesson-0203', 'aaaa2222-2222-2222-2222-222222222222', 'prompt-templates', 'Building Your Prompt Library', 'Create reusable prompts for your most common tasks.',
   'The most productive AI users build a library of proven prompts. Let''s create yours.

**Categories to Consider:**
- Writing & Editing
- Research & Analysis
- Planning & Organization
- Problem Solving
- Learning & Summarization

**Template Structure:**
```
[Task Name]
Context: [Standard context for this type of task]
Template: [The actual prompt with [VARIABLES] to fill in]
Tips: [What makes this work well]
```

**Example Template - Meeting Summary:**
```
Context: You are an executive assistant.
Template: Summarize these meeting notes into:
1. Key decisions made
2. Action items with owners
3. Open questions
Notes: [PASTE NOTES]
Tips: Works best with bullet-pointed raw notes
```

Build 5-10 templates for your most common tasks this week!',
   40, 3, true, 'operator');

-- =====================
-- LESSONS - Builder Track - AI APIs
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published, required_tier) VALUES
  ('lesson-0301', 'bbbb1111-1111-1111-1111-111111111111', 'api-fundamentals', 'AI API Fundamentals', 'Understanding how to work with AI APIs programmatically.',
   'Welcome to the Builder track! Here you''ll learn to integrate AI into applications.

**What is an AI API?**
An API (Application Programming Interface) lets your code communicate with AI services. Instead of using a chat interface, you send requests programmatically.

**Key Concepts:**
- API Keys (authentication)
- Endpoints (where to send requests)
- Request/Response format (usually JSON)
- Rate limits and pricing

**Major AI APIs:**
- OpenAI API (GPT models)
- Anthropic API (Claude models)
- Google AI (Gemini)

**Your First API Call:**
```javascript
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4",
    messages: [{ role: "user", content: "Hello!" }]
  })
});
```

Next lesson: We''ll build a complete integration.',
   30, 1, true, 'builder'),

  ('lesson-0302', 'bbbb1111-1111-1111-1111-111111111111', 'building-integrations', 'Building AI Integrations', 'Hands-on guide to integrating AI into your applications.',
   'Let''s build a real AI integration from scratch.

**Project: AI-Powered Content Generator**

We''ll create a simple Node.js application that generates content.

**Step 1: Setup**
```bash
npm init -y
npm install openai dotenv
```

**Step 2: Create the client**
```javascript
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
```

**Step 3: Make requests**
```javascript
async function generateContent(topic) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful content writer." },
      { role: "user", content: `Write about: ${topic}` }
    ],
    max_tokens: 500
  });
  return completion.choices[0].message.content;
}
```

**Best Practices:**
- Always handle errors gracefully
- Implement retry logic for rate limits
- Cache responses when appropriate
- Monitor usage and costs',
   45, 2, true, 'builder'),

  ('lesson-0303', 'bbbb1111-1111-1111-1111-111111111111', 'streaming-responses', 'Streaming AI Responses', 'Create responsive UIs with streaming AI outputs.',
   'Streaming makes your AI applications feel fast and responsive.

**Why Streaming?**
- Users see output immediately
- Better perceived performance
- Enables real-time applications

**Implementation:**
```javascript
async function streamResponse(prompt) {
  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    stream: true
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || "";
    process.stdout.write(content);
  }
}
```

**React Integration:**
```jsx
function ChatComponent() {
  const [response, setResponse] = useState("");

  async function handleStream() {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      setResponse(prev => prev + new TextDecoder().decode(value));
    }
  }
}
```

Streaming is essential for chat-like interfaces!',
   35, 3, true, 'builder');

-- =====================
-- LESSONS - Builder Track - Building Products
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published, required_tier) VALUES
  ('lesson-0401', 'bbbb2222-2222-2222-2222-222222222222', 'product-architecture', 'AI Product Architecture', 'Design patterns for AI-powered applications.',
   'Building AI products requires thoughtful architecture decisions.

**Common Patterns:**

**1. Direct Integration**
User → Your App → AI API → Response
Simple, good for basic use cases.

**2. RAG (Retrieval Augmented Generation)**
User → Your App → Vector DB → AI API → Response
Best for apps that need specific knowledge.

**3. Agent Architecture**
User → Orchestrator → [Tool 1, Tool 2, AI] → Response
For complex, multi-step tasks.

**Key Decisions:**
- Which AI provider(s) to use
- How to handle rate limits
- Caching strategy
- Error handling & fallbacks
- Cost management

**Scalability Considerations:**
- Async processing for long tasks
- Queue systems for high volume
- Multiple provider failover

Next: Let''s implement these patterns.',
   40, 1, true, 'builder'),

  ('lesson-0402', 'bbbb2222-2222-2222-2222-222222222222', 'deployment-production', 'Deploying AI Applications', 'Best practices for production AI deployments.',
   'Taking your AI application to production requires careful planning.

**Pre-Launch Checklist:**

**Security:**
- [ ] API keys in environment variables
- [ ] Rate limiting implemented
- [ ] Input validation & sanitization
- [ ] Output filtering (if needed)

**Performance:**
- [ ] Response caching where appropriate
- [ ] Streaming for long responses
- [ ] Loading states for users
- [ ] Timeout handling

**Monitoring:**
- [ ] Error tracking (Sentry, etc.)
- [ ] Usage metrics
- [ ] Cost monitoring
- [ ] Latency tracking

**Cost Management:**
- [ ] Token usage tracking
- [ ] Budget alerts
- [ ] Efficient prompts
- [ ] Model selection by task

**Deployment Platforms:**
- Vercel (great for Next.js)
- Railway
- Fly.io
- AWS/GCP/Azure

Your AI app is production-ready!',
   45, 2, true, 'builder'),

  ('lesson-0403', 'bbbb2222-2222-2222-2222-222222222222', 'capstone-project', 'Capstone: Build Your AI Product', 'Apply everything you''ve learned in a complete project.',
   'Congratulations on reaching the capstone! It''s time to build.

**Your Challenge:**
Build a complete AI-powered application of your choice.

**Requirements:**
1. Uses at least one AI API
2. Has a user interface
3. Implements error handling
4. Includes at least one advanced feature:
   - Streaming responses
   - Conversation memory
   - Custom prompts/templates
   - RAG with your data

**Suggested Projects:**
- AI Writing Assistant
- Code Review Bot
- Customer Support Chat
- Content Summarizer
- Learning Tutor

**Submission Checklist:**
- [ ] Working deployed application
- [ ] Source code repository
- [ ] Brief documentation
- [ ] 2-minute demo video

Complete this capstone to earn your Builder certification!',
   60, 3, true, 'builder');

-- =====================
-- CERTIFICATIONS
-- =====================
INSERT INTO certifications (id, slug, title, description, requirements_json) VALUES
  ('cert-operator', 'ai-operator', 'AI Operator', 'Demonstrates proficiency in leveraging AI tools for professional productivity.',
   '{"required_lesson_ids": ["lesson-0101", "lesson-0102", "lesson-0103", "lesson-0201", "lesson-0202", "lesson-0203"]}'),
  ('cert-builder', 'ai-builder', 'AI Builder', 'Demonstrates ability to build and deploy AI-powered applications.',
   '{"required_lesson_ids": ["lesson-0301", "lesson-0302", "lesson-0303", "lesson-0401", "lesson-0402", "lesson-0403"]}');

-- Note: To make yourself an admin after signing up, run:
-- UPDATE profiles SET role = 'admin' WHERE email = 'your-email@example.com';
