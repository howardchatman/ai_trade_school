-- AI Trade School Seed Data
-- Run this after running BOTH migrations to populate course data
-- Tracks now use price_cents for one-time purchases

-- =====================
-- TRACKS (7 launch courses)
-- =====================
INSERT INTO tracks (id, slug, title, description, sort_order, is_published, price_cents, price_label) VALUES
  ('11111111-1111-1111-1111-111111111111', 'ai-essentials', 'AI Essentials', 'Learn the fundamentals of AI. How to use ChatGPT, create charts, build to-do lists, and write effective prompts. The perfect starting point.', 1, true, 0, 'Free'),
  ('22222222-2222-2222-2222-222222222222', 'forex-trading-bot', 'AI Forex Trading Bot', 'Build your own AI-powered forex trading system from scratch. Learn to analyze markets, generate signals, and automate trades using AI.', 2, true, 9900, '$99'),
  ('33333333-3333-3333-3333-333333333333', 'five-star-reviews', '5-Star Review System', 'Build an AI system that helps businesses earn more 5-star reviews. Automate review requests, respond to feedback, and monitor reputation.', 3, true, 9900, '$99'),
  ('55555555-5555-5555-5555-555555555555', 'intake-lead-routing', 'AI Intake & Lead Routing System', 'Automate calls, forms, and follow-ups. Build a complete AI-powered intake system that captures leads, qualifies them, and routes them to the right person.', 4, true, 9900, '$99'),
  ('66666666-6666-6666-6666-666666666666', 'ai-receptionist', 'AI Receptionist & Call Handling', 'Build an AI system that answers calls, routes messages, and logs conversations. Turn missed calls into booked appointments automatically.', 5, true, 9900, '$99'),
  ('77777777-7777-7777-7777-777777777777', 'proposal-generator', 'AI Proposal & Estimate Generator', 'Build an AI tool that drafts professional proposals and estimates in minutes. Upload scope, pick a template, and let AI do the writing.', 6, true, 9900, '$99'),
  ('44444444-4444-4444-4444-444444444444', 'platform-builder', 'AI Platform Builder', 'The flagship program. Build complete AI-powered platforms with authentication, dashboards, payments, and deployment. Go from zero to a live SaaS product.', 7, true, 49700, '$497');

-- =====================
-- MODULES - AI Essentials (Free)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('aaaa1111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'Getting Started with AI', 'Your first steps with AI tools — set up accounts and learn the basics.', 1, true),
  ('aaaa2222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Everyday AI Skills', 'Practical skills: charts, to-do lists, writing, and research with AI.', 2, true),
  ('aaaa3333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Prompt Engineering Basics', 'Write better prompts and get better results every time.', 3, true);

-- =====================
-- MODULES - Forex Trading Bot ($99)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('bbbb1111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'Forex & AI Foundations', 'Understand forex markets and how AI can give you an edge.', 1, true),
  ('bbbb2222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', 'Building the Trading Bot', 'Build the core trading bot with market analysis and signals.', 2, true),
  ('bbbb3333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', 'Deployment & Live Trading', 'Test, deploy, and run your trading bot with real data.', 3, true);

-- =====================
-- MODULES - 5-Star Review System ($99)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('cccc1111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Review System Strategy', 'Why reviews matter and how AI transforms reputation management.', 1, true),
  ('cccc2222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Building the System', 'Build the automated review request and response system.', 2, true),
  ('cccc3333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', 'Scaling & Automation', 'Scale your review system across multiple locations and platforms.', 3, true);

-- =====================
-- MODULES - AI Intake & Lead Routing ($99)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('eeee1111-1111-1111-1111-111111111111', '55555555-5555-5555-5555-555555555555', 'Intake System Foundations', 'Understand lead routing, intake workflows, and how AI automates the process.', 1, true),
  ('eeee2222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555', 'Building the Intake Engine', 'Build the forms, call handling, and AI qualification system.', 2, true),
  ('eeee3333-3333-3333-3333-333333333333', '55555555-5555-5555-5555-555555555555', 'Automation & Follow-Up', 'Automate follow-ups, notifications, and CRM integration.', 3, true);

-- =====================
-- MODULES - AI Receptionist & Call Handling ($99)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('ffff1111-1111-1111-1111-111111111111', '66666666-6666-6666-6666-666666666666', 'AI Voice & Call Fundamentals', 'How AI phone systems work and the tools available to build them.', 1, true),
  ('ffff2222-2222-2222-2222-222222222222', '66666666-6666-6666-6666-666666666666', 'Building the AI Receptionist', 'Build the call answering, routing, and conversation logging system.', 2, true),
  ('ffff3333-3333-3333-3333-333333333333', '66666666-6666-6666-6666-666666666666', 'Deployment & Optimization', 'Deploy your AI receptionist and optimize call handling performance.', 3, true);

-- =====================
-- MODULES - AI Proposal & Estimate Generator ($99)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('gggg1111-1111-1111-1111-111111111111', '77777777-7777-7777-7777-777777777777', 'Proposal System Design', 'How great proposals work and how AI can write them faster.', 1, true),
  ('gggg2222-2222-2222-2222-222222222222', '77777777-7777-7777-7777-777777777777', 'Building the Generator', 'Build the scope intake, template engine, and AI writing pipeline.', 2, true),
  ('gggg3333-3333-3333-3333-333333333333', '77777777-7777-7777-7777-777777777777', 'Templates & Selling', 'Create industry templates and package it as a sellable service.', 3, true);

-- =====================
-- MODULES - AI Platform Builder ($497)
-- =====================
INSERT INTO modules (id, track_id, title, description, sort_order, is_published) VALUES
  ('dddd1111-1111-1111-1111-111111111111', '44444444-4444-4444-4444-444444444444', 'Platform Architecture', 'Design your AI platform — stack decisions, database, and project setup.', 1, true),
  ('dddd2222-2222-2222-2222-222222222222', '44444444-4444-4444-4444-444444444444', 'Authentication & Users', 'Build secure auth, user profiles, and role-based access control.', 2, true),
  ('dddd3333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', 'AI Features & Dashboards', 'Integrate AI APIs and build interactive dashboards.', 3, true),
  ('dddd4444-4444-4444-4444-444444444444', '44444444-4444-4444-4444-444444444444', 'Payments & Deployment', 'Add Stripe payments and deploy your platform to production.', 4, true);

-- =====================
-- LESSONS - AI Essentials - Getting Started
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0101', 'aaaa1111-1111-1111-1111-111111111111', 'what-is-ai', 'What is AI?', 'An introduction to artificial intelligence and its practical applications.',
   'Welcome to AI Trade School! In this lesson, we''ll explore what artificial intelligence really is and how it''s changing the way we work.

Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include understanding language, recognizing patterns, making decisions, and learning from experience.

Key concepts we''ll cover:
- Machine Learning vs. Traditional Programming
- Large Language Models (LLMs)
- Practical AI Applications
- Limitations and Considerations

By the end of this lesson, you''ll have a solid foundation for understanding how AI can enhance your work.',
   10, 1, true),

  ('lesson-0102', 'aaaa1111-1111-1111-1111-111111111111', 'setting-up-chatgpt', 'Setting Up ChatGPT', 'Create your account and learn your way around the ChatGPT interface.',
   'Let''s get you set up with ChatGPT — the most popular AI tool.

**Step 1: Create Your Account**
Go to chat.openai.com and sign up for a free account.

**Step 2: The Interface**
- The chat input is where you type your messages (called "prompts")
- Previous conversations are saved in the sidebar
- You can start a new conversation at any time

**Step 3: Your First Conversation**
Try these starter prompts:
1. "Explain what you can do in simple terms"
2. "What are 5 ways AI could help with my daily work?"
3. "Create a simple morning routine checklist"

**Tips:**
- Be specific — the more detail you give, the better the response
- You can ask follow-up questions in the same conversation
- If you don''t like a response, ask it to try again differently

You''re now ready to start using AI!',
   15, 2, true),

  ('lesson-0103', 'aaaa1111-1111-1111-1111-111111111111', 'ai-tools-overview', 'The AI Tool Landscape', 'Overview of the major AI tools available today and when to use each one.',
   'ChatGPT is just the beginning. Let''s explore the major AI tools you should know about:

**Text & Chat**
- ChatGPT (OpenAI) — General-purpose AI assistant
- Claude (Anthropic) — Great for long documents and analysis
- Gemini (Google) — Integrated with Google services

**Image Generation**
- DALL-E — Built into ChatGPT
- Midjourney — Highest quality artistic images

**Code Assistance**
- GitHub Copilot — AI pair programmer
- Cursor — Full AI-powered code editor

**Productivity**
- Notion AI — AI inside your notes and docs
- Grammarly — AI-powered writing improvement

Each tool has strengths. The key is knowing which one to reach for depending on your task.',
   15, 3, true);

-- =====================
-- LESSONS - AI Essentials - Everyday AI Skills
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0201', 'aaaa2222-2222-2222-2222-222222222222', 'charts-and-data', 'Creating Charts & Data Summaries', 'Use AI to turn raw data into charts, tables, and visual summaries.',
   'One of the most practical AI skills is turning messy data into clear visuals.

**What You Can Do:**
- Paste a spreadsheet or CSV data and ask for a summary
- Ask ChatGPT to create charts (with the Code Interpreter feature)
- Get trend analysis and key takeaways from data

**Example Prompt:**
"Here is my monthly sales data for 2024. Create a bar chart showing sales by month, identify the top 3 months, and summarize the overall trend."

**Tips for Data Work:**
- Always paste the actual data, not just describe it
- Be specific about what kind of chart you want
- Ask for insights after generating the visual
- Request the data in table format for easy copying

Practice: Take any data you have and ask AI to summarize it visually.',
   20, 1, true),

  ('lesson-0202', 'aaaa2222-2222-2222-2222-222222222222', 'todo-lists-planning', 'To-Do Lists & Planning with AI', 'Let AI help you plan projects, create task lists, and stay organized.',
   'AI is surprisingly good at helping you organize your work and life.

**Project Planning:**
"I need to launch a new website in 4 weeks. Break this into weekly milestones with daily tasks."

**Daily To-Do Lists:**
"Based on these priorities [list them], create a time-blocked schedule for my 8-hour workday."

**Meeting Prep:**
"I have a meeting about [topic] with [audience]. Create an agenda with talking points and 3 questions I should ask."

**Decision Making:**
"I''m deciding between [option A] and [option B]. Create a pros/cons table and give me your recommendation."

The key is giving AI enough context about your situation so it can tailor the output to you.',
   15, 2, true),

  ('lesson-0203', 'aaaa2222-2222-2222-2222-222222222222', 'writing-with-ai', 'Writing & Editing with AI', 'Use AI to draft, edit, and improve your writing.',
   'Whether it''s emails, reports, or social media — AI can dramatically speed up your writing.

**Drafting:**
"Write a professional email to a client explaining that their project will be delayed by one week. Be apologetic but confident."

**Editing:**
"Edit this paragraph to be more concise and professional: [paste text]"

**Rewriting for Tone:**
"Rewrite this message to be more [friendly/formal/urgent/casual]: [paste text]"

**Social Media:**
"Write 3 LinkedIn post options about [topic]. Keep each under 200 words. Include a hook in the first line."

**Important:** Always review and personalize AI-generated writing. It should sound like you, not like a robot. Use AI as a starting point, not the final product.',
   15, 3, true);

-- =====================
-- LESSONS - AI Essentials - Prompt Engineering Basics
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0301', 'aaaa3333-3333-3333-3333-333333333333', 'prompt-fundamentals', 'Prompt Engineering Fundamentals', 'Learn the framework for writing prompts that get great results every time.',
   'The quality of AI output depends almost entirely on the quality of your input. This is prompt engineering.

**The 5-Part Prompt Framework:**

1. **Role**: Tell the AI who it is — "You are a marketing expert..."
2. **Context**: Provide background — "I run a small bakery..."
3. **Task**: Be specific — "Write 3 Instagram captions..."
4. **Format**: Describe the output — "Each should be under 100 words with hashtags"
5. **Constraints**: Set limits — "Don''t use emojis. Keep it professional."

**Bad Prompt:** "Write about marketing"
**Good Prompt:** "You are a marketing expert. Write a 200-word blog intro about email marketing for small business owners. Use a friendly tone. Include 2 statistics."

The difference in output quality is dramatic. Practice this framework with every prompt you write this week.',
   20, 1, true),

  ('lesson-0302', 'aaaa3333-3333-3333-3333-333333333333', 'advanced-prompting', 'Advanced Prompt Techniques', 'Level up with chain-of-thought, examples, and iterative refinement.',
   'Now let''s go beyond the basics with techniques that unlock much better results.

**Chain-of-Thought:**
Add "Think step by step" or "Show your reasoning" to get more accurate answers to complex questions.

**Few-Shot Learning:**
Give the AI examples of what you want:
"Here are 2 examples of the writing style I want: [example 1], [example 2]. Now write something similar about..."

**Iterative Refinement:**
Don''t settle for the first response. Build on it:
- "Good, but make it shorter"
- "Add more specific numbers"
- "Rewrite the intro to be more engaging"

**Negative Prompting:**
Tell AI what NOT to do:
"Do not use jargon. Do not start with ''In today''s world''. Do not exceed 150 words."

Combining these techniques is how professionals get consistently great results from AI.',
   25, 2, true),

  ('lesson-0303', 'aaaa3333-3333-3333-3333-333333333333', 'prompt-templates', 'Building Your Prompt Library', 'Create reusable prompt templates for your most common tasks.',
   'The most productive AI users have a library of proven prompts they reuse and refine.

**Template Format:**
```
[Task Name]
Role: [Who the AI should be]
Template: [The prompt with [VARIABLES] to fill in]
```

**Example — Email Reply:**
```
Role: You are my executive assistant.
Template: Draft a reply to this email: [PASTE EMAIL]
Tone: Professional and friendly
Length: Under 100 words
Action: [Accept/Decline/Ask for more info]
```

**Categories to Build:**
- Writing (emails, social posts, reports)
- Research (summaries, comparisons, analysis)
- Planning (schedules, agendas, task breakdowns)
- Problem Solving (pros/cons, recommendations)

**Your Assignment:**
Build 5 prompt templates for tasks you do every week. Save them in a doc and start using them. Refine them over time.

This completes your AI Essentials training. You now have a strong foundation!',
   20, 3, true);

-- =====================
-- LESSONS - Forex Trading Bot - Foundations
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0401', 'bbbb1111-1111-1111-1111-111111111111', 'forex-fundamentals', 'Forex Market Fundamentals', 'Understand currency markets, pairs, and how trading works.',
   'Before we build a trading bot, you need to understand the market it operates in.

**What is Forex?**
The foreign exchange market is where currencies are traded. It''s the largest financial market in the world with over $6 trillion in daily volume.

**Key Concepts:**
- **Currency Pairs**: EUR/USD, GBP/JPY, etc.
- **Pips**: The smallest price movement
- **Spread**: The difference between buy and sell price
- **Leverage**: Trading with borrowed capital
- **Lot Sizes**: Standard, mini, and micro lots

**How AI Fits In:**
AI can analyze market data faster than any human. It can:
- Identify patterns across multiple timeframes
- Process news sentiment in real-time
- Execute trades based on predefined strategies
- Manage risk automatically

**Important Disclaimer:**
Trading involves significant risk. This course teaches you to build the technology — you are responsible for your own trading decisions and risk management.',
   25, 1, true),

  ('lesson-0402', 'bbbb1111-1111-1111-1111-111111111111', 'trading-data-apis', 'Trading Data & APIs', 'Connect to market data APIs and start pulling real forex data.',
   'To build a trading bot, you need reliable market data.

**Data Sources We''ll Use:**
- Historical price data (candlestick/OHLCV)
- Real-time price feeds
- Economic calendar data
- News sentiment data

**Setting Up Your Data Pipeline:**
1. Register for a forex data API (we''ll use a free tier)
2. Pull historical data for backtesting
3. Set up real-time data streaming

**Key Data Points:**
- Open, High, Low, Close prices
- Volume
- Technical indicators (moving averages, RSI, MACD)

You''ll build a data module that fetches, cleans, and stores market data — the foundation of your trading bot.',
   30, 2, true),

  ('lesson-0403', 'bbbb1111-1111-1111-1111-111111111111', 'ai-market-analysis', 'AI-Powered Market Analysis', 'Use AI to analyze market conditions and identify trading opportunities.',
   'Now we connect AI to your market data.

**What AI Can Analyze:**
- Price patterns and trends
- Support and resistance levels
- News sentiment impact on currency pairs
- Correlation between different pairs

**Building the Analysis Engine:**
1. Feed historical data to AI for pattern recognition
2. Use AI to generate market summaries
3. Create a scoring system for trade setups
4. Combine technical and sentiment analysis

**Prompt Engineering for Trading:**
"Analyze this EUR/USD price data for the last 30 days. Identify the current trend, key support/resistance levels, and any notable patterns. Rate the strength of the current trend from 1-10."

By the end of this module, your bot will be able to "read" the market.',
   35, 3, true);

-- =====================
-- LESSONS - Forex Trading Bot - Building the Bot
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0501', 'bbbb2222-2222-2222-2222-222222222222', 'signal-generation', 'Building the Signal Engine', 'Create the core signal generation system that identifies trade opportunities.',
   'The signal engine is the brain of your trading bot.

**Signal Types:**
- **Buy Signal**: Conditions suggest price will go up
- **Sell Signal**: Conditions suggest price will go down
- **Hold/Wait**: No clear opportunity

**Building the Engine:**
1. Define your trading strategy rules
2. Create AI prompts that evaluate market conditions
3. Build a scoring system that combines multiple indicators
4. Set confidence thresholds for trade execution

**Risk Management Rules:**
- Never risk more than 2% of account on a single trade
- Always set stop-loss orders
- Define take-profit targets
- Limit the number of open positions

The signal engine takes market data in and outputs actionable trade signals with confidence scores.',
   40, 1, true),

  ('lesson-0502', 'bbbb2222-2222-2222-2222-222222222222', 'trade-execution', 'Automated Trade Execution', 'Build the system that places and manages trades automatically.',
   'Now we connect signals to actual trade execution.

**Execution Flow:**
1. Signal engine generates a trade signal
2. Risk manager validates the trade
3. Position sizer calculates lot size
4. Order is placed via broker API
5. Stop-loss and take-profit are set
6. Trade is logged and monitored

**Safety Features:**
- Maximum daily loss limit
- Maximum number of trades per day
- Minimum time between trades
- Manual override capability

**Broker Integration:**
We''ll connect to a demo broker account first. Never go live without thorough backtesting.

The execution module handles the mechanical side of trading — placing orders, managing positions, and enforcing risk rules.',
   45, 2, true),

  ('lesson-0503', 'bbbb2222-2222-2222-2222-222222222222', 'backtesting', 'Backtesting Your Strategy', 'Test your trading bot against historical data before risking real money.',
   'Backtesting is essential. Never trade live without it.

**What is Backtesting?**
Running your strategy against historical data to see how it would have performed.

**Key Metrics:**
- Win rate (percentage of profitable trades)
- Risk/Reward ratio
- Maximum drawdown
- Sharpe ratio
- Total return

**Building the Backtester:**
1. Load historical data (at least 1 year)
2. Simulate your signal engine on past data
3. Execute virtual trades
4. Calculate performance metrics
5. Generate a performance report

**Common Pitfalls:**
- Overfitting to historical data
- Not accounting for spread and slippage
- Survivorship bias
- Ignoring transaction costs

A profitable backtest doesn''t guarantee future results, but an unprofitable one is a clear warning sign.',
   40, 3, true);

-- =====================
-- LESSONS - Forex Trading Bot - Deployment
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0601', 'bbbb3333-3333-3333-3333-333333333333', 'paper-trading', 'Paper Trading & Validation', 'Run your bot in paper trading mode with real-time data but no real money.',
   'Paper trading is the bridge between backtesting and live trading.

**What is Paper Trading?**
Your bot runs with real-time data and makes real decisions, but no actual money is at risk.

**Validation Checklist:**
- [ ] Bot connects to real-time data reliably
- [ ] Signals are generated correctly
- [ ] Orders are placed at expected prices
- [ ] Stop-losses trigger properly
- [ ] Performance matches backtest expectations
- [ ] Bot handles market gaps and volatility

**How Long to Paper Trade?**
Minimum 2-4 weeks. You want to see your bot handle different market conditions: trending, ranging, volatile, and quiet.

**Monitoring:**
Set up alerts for:
- Every trade placed
- Daily P&L summary
- Any errors or unexpected behavior

Only move to live trading when your paper trading results are consistent and match your expectations.',
   30, 1, true),

  ('lesson-0602', 'bbbb3333-3333-3333-3333-333333333333', 'live-deployment', 'Going Live', 'Deploy your trading bot and manage it in production.',
   'You''ve built it, backtested it, and paper traded it. Time to go live.

**Pre-Launch:**
1. Start with the smallest possible position sizes
2. Set strict daily loss limits
3. Have a kill switch to stop the bot instantly
4. Monitor closely for the first week

**Infrastructure:**
- Run on a reliable server (not your laptop)
- Set up automatic restart on failure
- Configure logging for every decision
- Set up email/SMS alerts for important events

**Ongoing Management:**
- Review performance weekly
- Compare live results to backtest expectations
- Adjust parameters gradually, not dramatically
- Keep a trading journal of observations

**When to Stop:**
- If live performance significantly deviates from backtest
- If you hit your maximum drawdown limit
- If market conditions change fundamentally

Congratulations — you''ve built an AI-powered forex trading bot!',
   35, 2, true);

-- =====================
-- LESSONS - 5-Star Review System - Strategy
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0701', 'cccc1111-1111-1111-1111-111111111111', 'why-reviews-matter', 'Why Reviews Matter', 'The business case for AI-powered review management.',
   'Online reviews are the #1 factor in local purchase decisions. Let''s understand why and how AI changes the game.

**The Numbers:**
- 93% of consumers read online reviews before buying
- A one-star increase on Yelp leads to 5-9% more revenue
- Businesses with 4+ stars get 12x more clicks
- 73% of consumers only pay attention to reviews from the last month

**The Problem:**
Most businesses don''t have a system. Happy customers leave silently. Unhappy customers leave reviews. The result: a skewed, negative online reputation.

**The AI Solution:**
We''ll build a system that:
1. Automatically asks happy customers for reviews
2. Intercepts unhappy customers before they go public
3. Responds to all reviews professionally with AI
4. Monitors reputation across platforms

This is a system you can use for your own business or sell to local businesses as a service.',
   20, 1, true),

  ('lesson-0702', 'cccc1111-1111-1111-1111-111111111111', 'review-platforms', 'Understanding Review Platforms', 'How Google, Yelp, and other platforms work — and their rules.',
   'Each review platform has different rules and algorithms. Understanding them is critical.

**Google Business Profile:**
- Most important for local businesses
- Reviews affect local search ranking
- Google detects and removes fake reviews
- You can respond to reviews publicly

**Yelp:**
- Has an aggressive review filter
- Soliciting reviews is against their TOS
- Focus on providing a great experience instead

**Industry-Specific Platforms:**
- TripAdvisor (hospitality)
- Healthgrades (healthcare)
- Avvo (legal)
- Houzz (home services)

**Universal Rules:**
- Never buy or fake reviews
- Never offer incentives for reviews (against most platform TOS)
- Always respond to reviews — especially negative ones
- Make it easy for customers to leave reviews (not manipulative)

We''ll build our system to work within these rules while maximizing review volume.',
   25, 2, true);

-- =====================
-- LESSONS - 5-Star Review System - Building
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0801', 'cccc2222-2222-2222-2222-222222222222', 'review-request-system', 'The Review Request System', 'Build an automated system that asks customers for reviews at the right time.',
   'Timing is everything. We''ll build a system that asks for reviews when customers are most likely to give them — right after a positive experience.

**The Flow:**
1. Customer completes a purchase/service
2. System sends a satisfaction check (SMS or email)
3. If happy → direct them to leave a review
4. If unhappy → route to customer service first

**Building It:**
- Set up automated triggers (after purchase, after service)
- Create AI-powered message templates
- Build the satisfaction gate (happy vs. unhappy routing)
- Track who was asked and who responded

**Message Templates:**
The AI generates personalized follow-up messages based on:
- Customer name
- Service/product they purchased
- Location
- Time since purchase

Simple, personal, and well-timed messages dramatically increase review rates.',
   35, 1, true),

  ('lesson-0802', 'cccc2222-2222-2222-2222-222222222222', 'ai-review-responses', 'AI-Powered Review Responses', 'Use AI to draft professional responses to every review automatically.',
   'Responding to every review shows customers you care. AI makes it scalable.

**Response Strategy:**
- **5-star reviews**: Thank them, mention specifics, invite them back
- **4-star reviews**: Thank them, acknowledge room for improvement
- **3-star reviews**: Thank them, address concerns, offer to make it right
- **1-2 star reviews**: Apologize, take responsibility, offer offline resolution

**Building the Response Generator:**
1. Feed the review text to AI
2. AI classifies sentiment and key topics
3. Generate a draft response matching your brand voice
4. Queue for review (optional) or auto-post

**Prompt for Review Responses:**
"You are a customer service manager for [business name], a [business type]. A customer left this [X]-star review: [review text]. Write a professional, warm response that acknowledges their feedback. Keep it under 75 words."

The AI handles 90% of the work. You review and personalize the last 10%.',
   35, 2, true),

  ('lesson-0803', 'cccc2222-2222-2222-2222-222222222222', 'reputation-dashboard', 'Building the Reputation Dashboard', 'Create a dashboard that shows review performance across all platforms.',
   'Every good system needs a command center. We''ll build a dashboard that gives you a complete view of your online reputation.

**Dashboard Features:**
- Average rating across platforms
- Review volume over time
- Response rate and response time
- Sentiment trends
- Alert for new negative reviews

**Data Sources:**
- Google Business Profile API
- Direct scraping (where APIs aren''t available)
- Manual import option

**AI Insights:**
The dashboard uses AI to:
- Identify common themes in reviews
- Detect trending issues before they become problems
- Suggest operational improvements based on feedback
- Generate weekly reputation reports

This dashboard becomes the central hub for reputation management.',
   40, 3, true);

-- =====================
-- LESSONS - 5-Star Review System - Scaling
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-0901', 'cccc3333-3333-3333-3333-333333333333', 'multi-location', 'Multi-Location Management', 'Scale the review system across multiple business locations.',
   'The real power of this system is scale. Managing reviews for one location is useful. Managing 10, 50, or 100 locations is a business.

**Multi-Location Features:**
- Centralized dashboard with location filtering
- Location-specific response templates
- Performance comparison across locations
- Automated alerts per location

**Scaling Considerations:**
- Each location may have different managers
- Response tone should match local brand
- Different platforms matter in different markets
- Aggregate reporting for ownership/corporate

This module turns your review system into something that can manage an entire franchise or be sold as a service to multi-location businesses.',
   30, 1, true),

  ('lesson-0902', 'cccc3333-3333-3333-3333-333333333333', 'selling-the-service', 'Turning It Into a Business', 'Package your review system as a service you can sell to local businesses.',
   'You''ve built a powerful system. Now let''s talk about how to make money with it.

**Service Packages:**
- Basic: Review monitoring + response ($299/mo per location)
- Pro: Monitoring + requests + responses ($499/mo per location)
- Enterprise: Full system + dashboard + reporting ($799/mo per location)

**Finding Clients:**
- Local businesses with bad or few reviews
- Multi-location businesses that need consistency
- Marketing agencies that want to add a service

**The Pitch:**
"I help businesses get more 5-star reviews using AI. Most of my clients see a 40% increase in review volume within 60 days."

**Fulfillment:**
With the system you built, managing 20+ clients takes minimal time. The AI does the heavy lifting.

Congratulations — you''ve built both a system and a potential business!',
   25, 2, true);

-- =====================
-- LESSONS - AI Intake & Lead Routing - Foundations
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1401', 'eeee1111-1111-1111-1111-111111111111', 'intake-overview', 'Why Intake Systems Matter', 'Every business loses leads. An AI intake system catches them all.',
   'Most businesses lose 30-50% of their leads because of slow follow-up, missed calls, or no system at all. We''re going to fix that.

**What is an Intake System?**
An intake system is the process that captures a new lead — from first contact to qualified handoff. It includes:
- Web forms
- Phone calls
- Chat widgets
- Email inquiries

**The Problem:**
- Calls go unanswered
- Forms sit in inboxes
- Follow-ups happen too late (or never)
- No one knows which leads are hot

**The AI Solution:**
We''ll build a system that:
1. Captures leads from every channel (forms, calls, chat)
2. Instantly qualifies them with AI
3. Routes them to the right person
4. Follows up automatically if no one responds

This system works for law firms, contractors, agencies, medical offices — any business that relies on inbound leads.',
   20, 1, true),

  ('lesson-1402', 'eeee1111-1111-1111-1111-111111111111', 'lead-qualification', 'AI Lead Qualification', 'Teach AI to score and qualify leads based on your criteria.',
   'Not all leads are equal. AI can instantly tell you which ones deserve immediate attention.

**Qualification Criteria:**
Every business has different criteria. Common ones:
- Budget (can they afford the service?)
- Timeline (do they need it soon?)
- Fit (is this a service you offer?)
- Location (are they in your service area?)

**Building the Qualifier:**
1. Define your qualification questions
2. Create an AI prompt that evaluates responses
3. Assign a lead score (Hot / Warm / Cold)
4. Route based on score

**Example AI Prompt:**
"You are a lead qualification assistant for a roofing company. Based on the following intake form responses, score this lead as Hot, Warm, or Cold. Hot = needs service within 30 days and owns the property. Warm = interested but no timeline. Cold = just browsing or not a fit."

AI handles the thinking. Your team only talks to qualified leads.',
   25, 2, true),

  ('lesson-1403', 'eeee1111-1111-1111-1111-111111111111', 'routing-logic', 'Lead Routing Logic', 'Route leads to the right person based on type, location, and urgency.',
   'Getting the right lead to the right person at the right time — that''s the goal.

**Routing Rules:**
- **By service type**: Plumbing leads → plumbing team, electrical → electrical team
- **By location**: Leads in Zone A → Team A, Zone B → Team B
- **By urgency**: Emergency → immediate call, standard → email follow-up
- **By availability**: Round-robin or first-available routing
- **By value**: High-value leads → senior team members

**Building the Router:**
1. Define your routing rules in a simple config
2. AI classifies the lead based on intake data
3. Router matches the classification to the right destination
4. Notification sent (SMS, email, Slack, or CRM)

**Fallback Rules:**
- If no one claims the lead in 5 minutes → escalate
- If after hours → auto-respond and queue for morning
- If all team members busy → notify manager

The router ensures no lead falls through the cracks.',
   30, 3, true);

-- =====================
-- LESSONS - AI Intake & Lead Routing - Building
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1501', 'eeee2222-2222-2222-2222-222222222222', 'smart-intake-forms', 'Building Smart Intake Forms', 'Create AI-enhanced forms that adapt and qualify leads in real-time.',
   'Traditional forms are static. Smart forms adapt based on the answers.

**Smart Form Features:**
- Conditional fields (show/hide based on previous answers)
- AI-powered field suggestions
- Real-time validation
- Instant qualification feedback

**Building It:**
1. Design the base form (name, email, phone, service needed)
2. Add conditional logic (if "emergency" → show urgency fields)
3. Connect to AI for instant qualification on submit
4. Store in database with lead score

**Form Channels:**
- Website embed (most common)
- Landing page for ads
- SMS-based intake ("Text HELP to...")
- Chat widget on your site

**Conversion Tips:**
- Keep it short (5-7 fields max)
- Ask qualifying questions naturally
- Show progress if multi-step
- Mobile-first design

A good form converts 2-3x more visitors into leads than a bad one.',
   35, 1, true),

  ('lesson-1502', 'eeee2222-2222-2222-2222-222222222222', 'call-intake', 'AI-Powered Call Intake', 'Handle phone leads with AI transcription, classification, and routing.',
   'Phone calls are often the highest-value leads. Let''s make sure none get missed.

**Call Intake Flow:**
1. Call comes in
2. AI answers or voicemail captures the message
3. AI transcribes the call/voicemail
4. AI extracts key details (name, service needed, urgency)
5. Lead is created, scored, and routed

**Tools We''ll Use:**
- AI transcription service for call-to-text
- AI classification to extract lead details from transcripts
- Notification system for instant alerts

**After-Hours Handling:**
- AI voicemail greeting customized to your business
- Instant transcription and classification
- Text the caller: "We got your message and will call back by 9 AM"
- Lead queued for morning with full context

**Key Metric:**
Speed-to-lead. The faster you respond, the more you close. Our system responds in seconds, not hours.',
   35, 2, true),

  ('lesson-1503', 'eeee2222-2222-2222-2222-222222222222', 'lead-dashboard', 'Building the Lead Dashboard', 'Create a command center to view, manage, and act on all incoming leads.',
   'Every lead from every channel — in one place.

**Dashboard Features:**
- Real-time lead feed (newest first)
- Lead score badges (Hot / Warm / Cold)
- Source tracking (form, call, chat, ad)
- Status pipeline (New → Contacted → Qualified → Won/Lost)
- Team member assignment

**Filters & Search:**
- Filter by score, source, status, date, team member
- Search by name, phone, email
- Date range reports

**Actions:**
- Click to call
- Send follow-up email/SMS
- Reassign to another team member
- Add notes
- Mark as won/lost

**AI Insights Panel:**
- "5 hot leads haven''t been contacted in 2+ hours"
- "Call volume up 30% this week — mostly from Google Ads"
- "Average response time: 12 minutes (goal: under 5)"

This dashboard becomes the nerve center of the business.',
   40, 3, true);

-- =====================
-- LESSONS - AI Intake & Lead Routing - Automation
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1601', 'eeee3333-3333-3333-3333-333333333333', 'auto-followup', 'Automated Follow-Up Sequences', 'Build AI-powered follow-up that nurtures leads until they convert or opt out.',
   'The fortune is in the follow-up. Most leads need 5-7 touches before they convert.

**Follow-Up Sequence:**
1. Instant: Confirmation (email + SMS) — "Got your request!"
2. 30 minutes: Personal touch — "Hi [name], I saw you need [service]..."
3. 24 hours: Value add — "Here''s what to expect when working with us..."
4. 3 days: Check-in — "Still thinking about [service]? Happy to answer questions"
5. 7 days: Last chance — "We''d love to help. Reply if you''re still interested"

**AI Personalization:**
Each message is personalized by AI based on:
- The service they requested
- Their lead score
- Their location
- Any details from the intake form

**Rules:**
- Stop sequence when lead responds
- Stop if they book an appointment
- Never send more than 1 message per day
- Include opt-out in every message

Automated follow-up turns cold leads into customers while your team focuses on hot ones.',
   30, 1, true),

  ('lesson-1602', 'eeee3333-3333-3333-3333-333333333333', 'crm-integration', 'CRM & Tool Integration', 'Connect your intake system to CRMs, calendars, and notification tools.',
   'Your intake system needs to play nice with the tools your team already uses.

**Common Integrations:**
- **CRM**: Push leads to HubSpot, Salesforce, or GoHighLevel
- **Calendar**: Auto-book appointments in Calendly or Google Calendar
- **Notifications**: Slack, Teams, SMS, or email alerts
- **Spreadsheets**: Google Sheets for simple tracking

**Building Integrations:**
1. Webhooks (push data when a lead comes in)
2. API connections (sync data between systems)
3. Zapier/Make for no-code connections

**Data Mapping:**
Map your intake fields to CRM fields:
- Name → Contact Name
- Phone → Phone Number
- Service Needed → Deal Category
- Lead Score → Priority

**Best Practice:**
One source of truth. Your intake system captures the lead, then pushes it everywhere else. Never enter data twice.',
   30, 2, true),

  ('lesson-1603', 'eeee3333-3333-3333-3333-333333333333', 'intake-as-service', 'Selling Intake Systems', 'Package your AI intake system as a service for local businesses.',
   'You''ve built something every local business needs. Let''s turn it into revenue.

**Who Needs This:**
- Law firms (intake is everything)
- Home service companies (plumbers, HVAC, roofers)
- Medical/dental offices
- Real estate agents
- Marketing agencies (for their clients)

**Pricing Models:**
- Setup fee: $500-$2,000 (one-time)
- Monthly management: $299-$799/month
- Per-lead pricing: $5-$25/qualified lead

**The Pitch:**
"How many leads did you miss last month? I build AI intake systems that capture every lead, qualify them instantly, and route them to your team. My clients typically see 40% more booked appointments within 30 days."

**Delivering the Service:**
With your system built, onboarding a new client takes a few hours:
1. Customize their intake form and qualification rules
2. Set up their routing and notifications
3. Connect to their CRM
4. Train their team on the dashboard

One system, many clients. This is a real business.',
   25, 3, true);

-- =====================
-- LESSONS - AI Receptionist - Voice Fundamentals
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1701', 'ffff1111-1111-1111-1111-111111111111', 'ai-voice-landscape', 'The AI Voice Landscape', 'How AI phone systems work and the platforms available to build them.',
   'AI can now handle phone calls that sound remarkably human. Let''s understand the technology.

**How AI Phone Systems Work:**
1. Call comes in → telephony platform answers
2. Caller''s speech → converted to text (Speech-to-Text)
3. Text → processed by AI (decides what to say)
4. AI response → converted to speech (Text-to-Speech)
5. Speech → played back to caller

**Key Technologies:**
- **Speech-to-Text (STT)**: Deepgram, Whisper, Google STT
- **AI Brain**: OpenAI, Anthropic, or custom models
- **Text-to-Speech (TTS)**: ElevenLabs, Play.ht, OpenAI TTS
- **Telephony**: Twilio, Vonage, SignalWire

**What AI Receptionists Can Do:**
- Answer calls with a custom greeting
- Ask qualifying questions
- Book appointments
- Transfer to the right person
- Take detailed messages
- Handle FAQs

**Limitations:**
- Complex conversations can still trip up AI
- Accents and background noise can reduce accuracy
- Emotional situations need human handling
- Always offer a "press 0 for a human" option',
   25, 1, true),

  ('lesson-1702', 'ffff1111-1111-1111-1111-111111111111', 'call-flow-design', 'Designing Call Flows', 'Design the conversation flows your AI receptionist will follow.',
   'A great AI receptionist starts with great conversation design.

**Call Flow Structure:**
1. **Greeting**: "Thank you for calling [Business]. How can I help you today?"
2. **Intent Detection**: AI figures out why they''re calling
3. **Information Gathering**: Ask what''s needed to help
4. **Action**: Book, transfer, take message, or answer
5. **Confirmation**: "Let me confirm — you need X on Y date?"
6. **Closing**: "You''re all set. Is there anything else?"

**Common Call Intents:**
- Book an appointment
- Get pricing information
- Ask about hours/location
- Report an emergency
- Speak to a specific person
- Cancel or reschedule

**Designing for Each Intent:**
For each intent, map out:
- What questions to ask
- What info to collect
- What action to take
- What to say if you can''t help

**Tips:**
- Keep responses short (callers don''t want essays)
- Confirm critical info (dates, phone numbers)
- Always offer a human fallback
- Sound helpful, not robotic',
   30, 2, true),

  ('lesson-1703', 'ffff1111-1111-1111-1111-111111111111', 'voice-personality', 'Crafting the AI Voice & Personality', 'Choose the right voice, tone, and personality for your AI receptionist.',
   'The voice IS the brand when someone calls. Getting it right matters.

**Choosing a Voice:**
- Male or female (match your brand)
- Accent and dialect
- Speed and cadence
- Warmth vs. professionalism

**Personality Design:**
Define your receptionist''s personality:
- Name: "Hi, this is Sarah from [Business]"
- Tone: Friendly and professional
- Patience level: Never rushes the caller
- Knowledge: Knows services, hours, pricing, FAQs
- Boundaries: Knows when to transfer to a human

**The System Prompt:**
"You are Sarah, the AI receptionist for [Business Name], a [business type] in [city]. You are friendly, professional, and helpful. You can book appointments, answer questions about services and pricing, and take messages. If you can''t help with something, offer to transfer to a team member. Keep responses under 2 sentences when possible."

**Testing:**
Call your own system repeatedly:
- Try different intents
- Try confusing questions
- Try edge cases
- Get others to test it

The voice and personality are what make callers trust your AI.',
   25, 3, true);

-- =====================
-- LESSONS - AI Receptionist - Building
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1801', 'ffff2222-2222-2222-2222-222222222222', 'telephony-setup', 'Setting Up Telephony', 'Get a phone number and connect it to your AI system.',
   'Let''s get a real phone number that your AI can answer.

**Telephony Setup:**
1. Create a Twilio account (or similar)
2. Purchase a phone number
3. Configure the number to hit your webhook
4. Set up call recording (with consent)

**The Webhook Flow:**
When a call comes in, Twilio sends a request to your server:
- Your server starts the AI conversation
- Each exchange: caller speaks → STT → AI → TTS → caller hears response
- Call ends → log the full conversation

**Phone Number Options:**
- Local numbers (builds trust)
- Toll-free numbers (professional)
- Port your existing number

**Call Recording:**
- Always disclose recording ("This call may be recorded")
- Store recordings securely
- Useful for training and quality review

By the end of this lesson, you''ll have a phone number that connects to your AI system.',
   35, 1, true),

  ('lesson-1802', 'ffff2222-2222-2222-2222-222222222222', 'conversation-engine', 'Building the Conversation Engine', 'Build the AI brain that powers real-time phone conversations.',
   'The conversation engine is where the magic happens — AI thinking and responding in real-time.

**Architecture:**
1. Maintain conversation context (what was said so far)
2. Detect caller intent from each statement
3. Decide the next action (ask, answer, book, transfer)
4. Generate a natural response
5. Handle interruptions gracefully

**Key Features:**
- **Context memory**: Remember what the caller said earlier
- **Slot filling**: Collect required info piece by piece (name, date, time)
- **Confirmation**: "Just to confirm, you want Tuesday at 2 PM?"
- **Error recovery**: "Sorry, I didn''t catch that. Could you repeat?"

**Handling Edge Cases:**
- Caller goes off-topic → gently redirect
- Caller gets frustrated → empathize and offer human
- Multiple questions at once → handle one at a time
- Silence → "Are you still there?"

**Speed Matters:**
Response latency should be under 1 second. Callers notice delays. Optimize your STT → AI → TTS pipeline for speed.',
   45, 2, true),

  ('lesson-1803', 'ffff2222-2222-2222-2222-222222222222', 'call-actions', 'Call Actions: Booking, Transfers & Messages', 'Build the actions your receptionist can take during a call.',
   'Answering is step one. Taking action is where the value is.

**Booking Appointments:**
1. AI asks for preferred date and time
2. Check calendar availability (Google Calendar API)
3. Confirm the booking
4. Send confirmation SMS/email to caller
5. Add to team member''s calendar

**Transferring Calls:**
- "Let me transfer you to our billing department"
- Warm transfer (AI briefs the human first) vs. cold transfer
- Fallback if no one answers: take a message

**Taking Messages:**
- Capture: caller name, number, reason, urgency
- AI summarizes the message
- Send to the right person via SMS, email, or Slack
- Log in the system

**FAQ Responses:**
- Hours, location, services, pricing
- Stored in a knowledge base
- AI retrieves and reads the answer naturally

Each action makes your receptionist more valuable than a basic voicemail system.',
   40, 3, true);

-- =====================
-- LESSONS - AI Receptionist - Deployment
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1901', 'ffff3333-3333-3333-3333-333333333333', 'testing-optimization', 'Testing & Optimizing Your AI Receptionist', 'Test extensively and optimize for real-world call scenarios.',
   'Before going live, your AI receptionist needs thorough testing.

**Testing Checklist:**
- [ ] Greeting plays correctly
- [ ] Intent detection works for all common reasons
- [ ] Appointment booking creates real calendar events
- [ ] Call transfers connect to the right person
- [ ] Messages are delivered correctly
- [ ] After-hours handling works
- [ ] "Press 0 for human" always works
- [ ] Noise/accent handling is acceptable

**Load Testing:**
- Test with multiple simultaneous calls
- Verify no calls get dropped
- Check response latency under load

**Optimization:**
- Review call transcripts for misunderstandings
- Refine the system prompt for common issues
- Add FAQ entries for repeated questions
- Adjust voice speed and tone based on feedback

**Metrics to Track:**
- Call completion rate (% of calls handled without transfer)
- Average call duration
- Appointment booking rate
- Caller satisfaction (post-call survey)

Keep improving based on real call data.',
   30, 1, true),

  ('lesson-1902', 'ffff3333-3333-3333-3333-333333333333', 'receptionist-deployment', 'Going Live & Monitoring', 'Deploy your AI receptionist and set up ongoing monitoring.',
   'Your AI receptionist is tested and ready. Time to answer real calls.

**Go-Live Strategy:**
1. Start with after-hours only (lowest risk)
2. Expand to overflow calls (when staff is busy)
3. Then handle all calls with human backup

**Monitoring Dashboard:**
- Live call indicator
- Today''s call count and outcomes
- Missed/failed calls alert
- Daily summary email

**Ongoing Improvements:**
- Review transcripts weekly
- Flag calls that went poorly
- Update the knowledge base
- Refine routing rules

**Selling as a Service:**
- Setup: $1,000-$3,000
- Monthly: $299-$599/month
- Target: small businesses, medical offices, law firms
- Pitch: "Never miss another call. My AI receptionist answers 24/7, books appointments, and takes messages — for less than a part-time employee."

You now have an AI receptionist that works around the clock.',
   25, 2, true);

-- =====================
-- LESSONS - AI Proposal Generator - Design
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-2001', 'gggg1111-1111-1111-1111-111111111111', 'why-proposals-matter', 'Why Proposals Win (or Lose) Business', 'Great proposals close deals. Bad proposals lose them. AI tips the scale.',
   'A proposal is often the last thing a client sees before making a decision. Most businesses send mediocre proposals and wonder why they lose.

**The Numbers:**
- Companies that send proposals within 24 hours win 60% more deals
- Custom proposals close at 2x the rate of generic templates
- Most contractors/consultants spend 2-4 hours per proposal

**Common Problems:**
- Takes too long to write
- Looks unprofessional
- Too generic — not personalized
- Missing key sections (scope, timeline, pricing)
- Inconsistent quality across team members

**The AI Solution:**
We''ll build a tool that:
1. Takes in the scope/requirements (form or upload)
2. AI drafts a complete, professional proposal
3. Uses your company templates and branding
4. Ready to send in minutes, not hours

This works for contractors, consultants, agencies, freelancers — anyone who sends proposals to win work.',
   20, 1, true),

  ('lesson-2002', 'gggg1111-1111-1111-1111-111111111111', 'proposal-anatomy', 'Anatomy of a Winning Proposal', 'The exact sections, structure, and language that wins business.',
   'Every great proposal follows a proven structure. Let''s break it down.

**The Winning Structure:**

1. **Cover Page**: Your logo, client name, project title, date
2. **Executive Summary**: 2-3 paragraphs summarizing the problem and your solution
3. **Scope of Work**: Exactly what you''ll deliver (clear, numbered items)
4. **Timeline**: Milestones with dates
5. **Pricing**: Clear, itemized pricing (no surprises)
6. **About Us**: Why you''re the right choice (brief)
7. **Terms**: Payment terms, revisions, what''s not included
8. **Next Steps**: "Sign below to get started" with signature line

**Language Tips:**
- Use "you" and "your" more than "we" and "our"
- Focus on outcomes, not just deliverables
- Be specific — "deliver in 3 weeks" not "deliver quickly"
- Include social proof (past results, testimonials)

**What AI Will Handle:**
AI will draft sections 2, 3, 4, and 6 based on your inputs. You provide the pricing and terms.',
   25, 2, true),

  ('lesson-2003', 'gggg1111-1111-1111-1111-111111111111', 'scope-to-proposal', 'From Scope to Proposal', 'How to capture scope inputs that AI can turn into a great proposal.',
   'Garbage in, garbage out. The better the scope input, the better the AI-generated proposal.

**Scope Intake Methods:**

**Method 1: Structured Form**
- Client name and company
- Project description (free text)
- Specific deliverables requested
- Budget range
- Timeline expectations

**Method 2: Upload & Extract**
- Client uploads an RFP, email, or brief
- AI extracts the key details
- You review and confirm before generating

**Method 3: Call Notes**
- Paste your discovery call notes
- AI pulls out scope, requirements, and concerns
- Generates proposal from the conversation

**Building the Scope Intake:**
1. Create a scope input form (web-based)
2. Add an upload option for documents
3. Build AI extraction to normalize all inputs
4. Store scopes in your database for reuse

Good scope capture is the foundation of a fast, accurate proposal.',
   30, 3, true);

-- =====================
-- LESSONS - AI Proposal Generator - Building
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-2101', 'gggg2222-2222-2222-2222-222222222222', 'template-engine', 'Building the Template Engine', 'Create reusable proposal templates that AI fills in dynamically.',
   'Templates give your proposals consistency. AI gives them speed.

**Template Components:**
- Header/footer with your branding
- Section placeholders ([PROJECT_DESCRIPTION], [SCOPE_ITEMS], etc.)
- Pricing table structure
- Terms and conditions (static)
- Signature block

**Building Templates:**
1. Create a base template in HTML/Markdown
2. Define placeholder variables
3. Build a template selector (different templates for different services)
4. AI fills in the dynamic sections

**Template Variables:**
```
{{client_name}} — Client Company Name
{{project_title}} — Name of the Project
{{executive_summary}} — AI-generated summary
{{scope_items}} — AI-generated scope list
{{timeline}} — AI-generated timeline
{{pricing_table}} — From your pricing input
{{about_section}} — Your company bio
```

**Multiple Templates:**
- Web Development Proposal
- Consulting Engagement
- Home Renovation Estimate
- Marketing Services Proposal

Each template is tailored to the industry but powered by the same AI engine.',
   35, 1, true),

  ('lesson-2102', 'gggg2222-2222-2222-2222-222222222222', 'ai-writing-pipeline', 'The AI Writing Pipeline', 'Build the AI system that drafts each section of the proposal.',
   'This is the core of the tool — AI that writes professional proposal content.

**The Pipeline:**
1. Receive scope inputs
2. Select the matching template
3. For each AI-powered section, generate content:
   - Executive Summary
   - Scope of Work (detailed, numbered)
   - Timeline with milestones
   - About Us (customized to the project)
4. Assemble all sections into the final document

**Prompts for Each Section:**

**Executive Summary:**
"Write a 2-paragraph executive summary for a proposal from [your company] to [client]. The project involves [scope description]. Focus on the client''s goals and how our approach solves their problem. Professional but warm tone."

**Scope of Work:**
"Based on this project description: [scope]. Create a numbered list of deliverables. Be specific. Each item should describe what will be delivered, not how. Include 6-10 items."

**Timeline:**
"Create a project timeline for the following scope: [scope items]. Break it into phases. Each phase should have a name, duration, and key deliverables. Total project length: [estimated duration]."

**Quality Control:**
- AI drafts first
- Review for accuracy
- Edit pricing manually (never let AI guess prices)
- Final human approval before sending',
   40, 2, true),

  ('lesson-2103', 'gggg2222-2222-2222-2222-222222222222', 'pdf-generation', 'PDF Generation & Delivery', 'Turn the proposal into a polished PDF and deliver it to the client.',
   'The final step — turning your AI-drafted proposal into a beautiful document.

**PDF Generation:**
- Convert HTML/Markdown template to PDF
- Include your logo, colors, and branding
- Proper page breaks and formatting
- Professional typography

**Tools for PDF Generation:**
- Puppeteer (HTML → PDF)
- React-PDF
- DocuSign or PandaDoc for advanced features
- Simple: Markdown → styled HTML → print to PDF

**Delivery Options:**
1. **Email**: Send PDF as attachment with a cover note
2. **Link**: Host the PDF and send a viewing link
3. **E-Signature**: Embed signing with DocuSign or similar
4. **Client Portal**: Upload to a client-facing dashboard

**Tracking:**
- Know when the client opens the proposal
- See which sections they spend time on
- Follow up when they view but don''t respond

A professional, tracked proposal dramatically increases your close rate.',
   35, 3, true);

-- =====================
-- LESSONS - AI Proposal Generator - Templates & Selling
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-2201', 'gggg3333-3333-3333-3333-333333333333', 'industry-templates', 'Building Industry Templates', 'Create proposal templates for specific industries that you can sell or use.',
   'Industry-specific templates make your tool immediately valuable.

**Templates to Build:**

**Home Services:**
- Roofing estimate
- HVAC installation proposal
- Bathroom renovation estimate
- Landscaping proposal

**Professional Services:**
- Consulting engagement letter
- Marketing services proposal
- Web development proposal
- Legal services engagement

**Creative Services:**
- Design project proposal
- Photography/video quote
- Brand identity proposal
- Content creation package

**For Each Template, Include:**
- Industry-specific language and terminology
- Common scope items for that industry
- Typical timelines
- Suggested pricing structures
- Terms specific to that industry

5-10 good templates cover most small business needs.',
   30, 1, true),

  ('lesson-2202', 'gggg3333-3333-3333-3333-333333333333', 'estimate-calculator', 'Building the Estimate Calculator', 'Add pricing logic so AI can suggest estimates based on scope.',
   'Proposals need prices. Let''s build a smart estimating system.

**Pricing Models:**
- **Fixed price**: $X for the whole project
- **Itemized**: $X per deliverable
- **Hourly estimate**: X hours × $Y/hour
- **Tiered**: Good / Better / Best packages

**Building the Calculator:**
1. Define your pricing rules per service type
2. AI analyzes the scope and suggests line items
3. Each line item gets a price from your rate card
4. Total is calculated automatically
5. Optional: show 3 tiers (gives client choice)

**AI Pricing Assist:**
"Based on this scope of work, suggest an itemized price breakdown. Use these rate guidelines: [your rates]. Group items into phases."

**Important:**
- AI suggests, YOU approve pricing
- Never auto-send without price review
- Include a disclaimer on estimates
- Make it easy to adjust individual line items

The estimate calculator turns proposal writing from a 3-hour task into a 15-minute task.',
   35, 2, true),

  ('lesson-2203', 'gggg3333-3333-3333-3333-333333333333', 'proposal-as-service', 'Selling Proposal Generation as a Service', 'Package your AI proposal tool for others to use or as a service you offer.',
   'You''ve built a tool that saves hours on every proposal. That''s valuable.

**Option 1: Use It Yourself**
- Send better proposals faster
- Win more deals by responding quickly
- Maintain consistent quality across your team

**Option 2: Sell as a Service**
- "I''ll write your proposals for you using AI"
- Charge per proposal ($50-$150 each)
- Or monthly retainer ($499/mo for unlimited proposals)
- Target: contractors, consultants, agencies

**Option 3: Sell as a Tool**
- SaaS model: $49-$99/month per user
- White-label for agencies
- Marketplace of templates

**The Pitch:**
"How long does it take you to write a proposal? What if I told you it could take 15 minutes instead of 3 hours — and look more professional? My AI proposal tool handles the writing so you can focus on closing."

**What Makes It Sellable:**
- Saves real time (hours per proposal)
- Improves quality (consistent, professional)
- Easy to demo (show before/after)
- Quick ROI (one won deal pays for itself)

You now have a tool, a service, or a product — your choice.',
   25, 3, true);

-- =====================
-- LESSONS - AI Platform Builder - Architecture
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1001', 'dddd1111-1111-1111-1111-111111111111', 'choosing-your-stack', 'Choosing Your Tech Stack', 'The technology choices behind modern AI platforms.',
   'Every great platform starts with good architecture decisions.

**Our Stack:**
- **Next.js** — Full-stack React framework
- **Supabase** — Database, auth, and real-time
- **Stripe** — Payments and subscriptions
- **Vercel** — Deployment and hosting
- **AI APIs** — OpenAI, Anthropic, etc.

**Why This Stack?**
- Ship fast with full-stack TypeScript
- Supabase gives you a Postgres database with auth built in
- Vercel deploys Next.js automatically from Git
- All services have generous free tiers

**What We''ll Build:**
A complete SaaS platform with:
- User registration and login
- Dashboard with AI-powered features
- Stripe payments (one-time and subscriptions)
- Admin panel
- Production deployment

Let''s set up the project.',
   30, 1, true),

  ('lesson-1002', 'dddd1111-1111-1111-1111-111111111111', 'project-setup', 'Project Setup & Database Design', 'Initialize your project, set up Supabase, and design your database schema.',
   'Time to get hands-on. We''ll initialize the project and set up the foundation.

**Step 1: Create the Project**
Initialize a Next.js project with TypeScript, Tailwind CSS, and the App Router.

**Step 2: Supabase Setup**
- Create a Supabase project
- Set up environment variables
- Install the Supabase client library
- Test the connection

**Step 3: Database Design**
Design your tables:
- profiles (extends Supabase auth.users)
- Your domain-specific tables
- Relationships and foreign keys

**Step 4: Row Level Security**
RLS is critical for security:
- Users can only read/write their own data
- Admins have elevated access
- Public data is readable by anyone

By the end of this lesson, you''ll have a working Next.js project connected to a Supabase database.',
   45, 2, true),

  ('lesson-1003', 'dddd1111-1111-1111-1111-111111111111', 'ui-foundations', 'UI Foundations', 'Set up your component library and build the layout system.',
   'A professional platform needs a professional UI. We''ll use shadcn/ui — a modern component library.

**Installing shadcn/ui:**
- Set up Tailwind CSS configuration
- Install the CLI
- Add components: Button, Card, Input, Dialog, etc.

**Layout System:**
- Create the main layout with sidebar navigation
- Build responsive header/nav
- Set up the authenticated vs. public layout split

**Theme & Branding:**
- Configure your color palette
- Set up dark mode (or light mode)
- Typography and spacing system

**Pages to Build:**
- Landing page (public)
- Dashboard (authenticated)
- Settings page
- 404 and error pages

The UI foundation makes everything that follows look polished and professional.',
   40, 3, true);

-- =====================
-- LESSONS - AI Platform Builder - Auth
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1101', 'dddd2222-2222-2222-2222-222222222222', 'supabase-auth', 'Supabase Authentication', 'Build complete sign-up, login, and password reset flows.',
   'Authentication is the first real feature every platform needs.

**What We''ll Build:**
- Email/password sign up
- Email/password login
- Password reset flow
- Email verification
- Protected routes (middleware)

**Supabase Auth Flow:**
1. User submits signup form
2. Supabase creates auth.users entry
3. Database trigger creates profiles entry
4. Confirmation email sent
5. User verifies and logs in

**Security Essentials:**
- Server-side session validation
- CSRF protection
- Secure cookie handling
- Rate limiting on auth endpoints

**Middleware:**
Next.js middleware checks every request:
- Is the user authenticated?
- Should they be redirected to login?
- Do they have the right role for this page?

By the end, your platform has a complete, secure auth system.',
   45, 1, true),

  ('lesson-1102', 'dddd2222-2222-2222-2222-222222222222', 'user-profiles', 'User Profiles & Settings', 'Build user profile management with avatar uploads and settings.',
   'Every user needs a profile page where they can manage their account.

**Profile Features:**
- Display name and email
- Avatar upload (using Supabase Storage)
- Account settings
- Password change

**Building It:**
1. Create the settings page layout
2. Build the profile edit form
3. Implement avatar upload with image processing
4. Handle form validation and errors

**Supabase Storage:**
- Create a storage bucket for avatars
- Set up RLS policies (users can only upload their own)
- Generate public URLs for display

**Server Actions:**
We''ll use Next.js Server Actions for all mutations:
- updateProfile(formData)
- updatePassword(formData)
- uploadAvatar(file)

Clean, secure, server-side mutations without building API routes.',
   40, 2, true),

  ('lesson-1103', 'dddd2222-2222-2222-2222-222222222222', 'role-based-access', 'Role-Based Access Control', 'Implement admin and user roles with proper access control.',
   'Not all users are equal. Admins need more access than regular users.

**Role System:**
- **user**: Default role, access to their own data
- **admin**: Full access, can manage all users and content

**Implementation:**
1. Add role column to profiles table
2. Create middleware that checks roles
3. Build admin-only routes and pages
4. Row Level Security policies per role

**Admin Features:**
- User management (view, edit roles)
- Content management
- Analytics overview
- System settings

**Security:**
- Roles are stored server-side (not in JWT claims)
- Every admin action validates role on the server
- RLS provides database-level protection
- No client-side role checks (can be bypassed)

Role-based access control is the foundation for any multi-user platform.',
   35, 3, true);

-- =====================
-- LESSONS - AI Platform Builder - AI Features
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1201', 'dddd3333-3333-3333-3333-333333333333', 'integrating-ai-apis', 'Integrating AI APIs', 'Connect your platform to OpenAI, Anthropic, and other AI services.',
   'This is where your platform gets its AI superpowers.

**Setting Up AI Clients:**
- Install the OpenAI and Anthropic SDKs
- Configure API keys as environment variables
- Create a reusable AI service layer

**Building AI Features:**
- Text generation (content creation, summaries)
- Chat interfaces (conversational AI)
- Data analysis (insights from user data)
- Image generation (if applicable)

**Architecture:**
- AI calls happen on the server (protect API keys)
- Use streaming for long responses
- Cache responses when appropriate
- Handle errors and rate limits gracefully

**Cost Management:**
- Track token usage per user
- Set usage limits
- Choose the right model for each task (don''t use GPT-4 for simple tasks)

Your AI service layer becomes the core value of your platform.',
   45, 1, true),

  ('lesson-1202', 'dddd3333-3333-3333-3333-333333333333', 'streaming-chat', 'Building a Streaming Chat Interface', 'Create a real-time chat interface with streaming AI responses.',
   'A streaming chat interface is the most common AI feature. Let''s build one that feels great.

**Components:**
- Message list (user messages + AI responses)
- Input form with submit
- Streaming response display
- Loading and error states

**Server-Side Streaming:**
Use Next.js route handlers with streaming:
1. Receive the user message
2. Call the AI API with streaming enabled
3. Stream tokens back to the client
4. Client renders tokens as they arrive

**UX Details That Matter:**
- Auto-scroll as new content appears
- Show a typing indicator during the initial delay
- Allow users to stop generation
- Markdown rendering for AI responses
- Copy button for responses

**Conversation History:**
- Store messages in the database
- Load previous conversations
- Pass conversation context to AI for continuity

This chat interface can be adapted for any AI-powered product.',
   50, 2, true),

  ('lesson-1203', 'dddd3333-3333-3333-3333-333333333333', 'dashboards-analytics', 'Building Dashboards & Analytics', 'Create data-driven dashboards that give users actionable insights.',
   'Dashboards turn raw data into value for your users.

**Dashboard Components:**
- Stat cards (key metrics at a glance)
- Charts (line, bar, area charts)
- Data tables with sorting and filtering
- Activity feeds

**Libraries We''ll Use:**
- Recharts or Chart.js for visualizations
- Tanstack Table for data tables
- shadcn/ui Card components for layout

**AI-Powered Insights:**
- Automatically generate data summaries
- Identify trends and anomalies
- Suggest actions based on data patterns
- Natural language data queries

**Building the Dashboard:**
1. Design the layout (stat cards on top, charts below)
2. Create data fetching functions
3. Build chart components
4. Add AI insight generation
5. Make it responsive

A great dashboard is the reason users come back every day.',
   45, 3, true);

-- =====================
-- LESSONS - AI Platform Builder - Payments & Deployment
-- =====================
INSERT INTO lessons (id, module_id, slug, title, summary, content_md, duration_minutes, sort_order, is_published) VALUES
  ('lesson-1301', 'dddd4444-4444-4444-4444-444444444444', 'stripe-payments', 'Stripe Payments Integration', 'Add one-time purchases and subscriptions with Stripe.',
   'If you want to make money, you need payments. Stripe makes it straightforward.

**What We''ll Build:**
- One-time product purchases
- Subscription plans (monthly/yearly)
- Checkout flow
- Webhook handler for payment events
- Customer portal for managing subscriptions

**Stripe Setup:**
1. Create a Stripe account
2. Set up products and prices in the dashboard
3. Install the Stripe SDK
4. Configure webhook endpoints

**Checkout Flow:**
1. User clicks "Buy" or "Subscribe"
2. Create a Stripe Checkout Session on the server
3. Redirect to Stripe''s hosted checkout page
4. Stripe sends a webhook on success
5. Your webhook handler grants access

**Security:**
- Always verify webhooks with the signing secret
- Handle all payment events server-side
- Never trust client-side payment data

Stripe handles PCI compliance, fraud detection, and payment processing. You focus on your product.',
   50, 1, true),

  ('lesson-1302', 'dddd4444-4444-4444-4444-444444444444', 'deployment', 'Deploying to Production', 'Deploy your platform to Vercel and configure your production environment.',
   'Your platform is built. Let''s put it on the internet.

**Deployment with Vercel:**
1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

**Environment Variables:**
- Supabase URL and keys
- Stripe secret key and webhook secret
- AI API keys
- App URL (your domain)

**Custom Domain:**
- Add your domain in Vercel
- Update DNS records
- SSL is automatic

**Production Checklist:**
- [ ] All environment variables set
- [ ] Supabase RLS policies enabled
- [ ] Stripe webhook endpoint configured
- [ ] Error monitoring set up
- [ ] Database backups configured
- [ ] Rate limiting in place

**Post-Launch:**
- Monitor error rates
- Watch performance metrics
- Gather user feedback
- Iterate and improve

Your AI platform is live. Congratulations — you built a real SaaS product!',
   45, 2, true),

  ('lesson-1303', 'dddd4444-4444-4444-4444-444444444444', 'capstone-project', 'Capstone: Launch Your Platform', 'Apply everything and launch your own AI-powered platform.',
   'This is it. Your final project — launch your own AI platform.

**The Challenge:**
Build and deploy a complete AI-powered platform.

**Requirements:**
1. User authentication (sign up, login, protected routes)
2. At least one AI-powered feature
3. A dashboard with real data
4. Stripe payments (at least one purchase flow)
5. Deployed to a live URL

**Suggested Ideas:**
- AI content generator for marketers
- AI study assistant for students
- AI meal planner with grocery lists
- AI resume builder and optimizer
- AI social media scheduler

**Deliverables:**
- Live, working URL
- GitHub repository
- Brief write-up of what you built and why

Complete this capstone to earn your AI Platform Builder certification!',
   60, 3, true);

-- =====================
-- CERTIFICATIONS
-- =====================
INSERT INTO certifications (id, slug, title, description, requirements_json) VALUES
  ('cert-essentials', 'ai-essentials', 'AI Essentials', 'Demonstrates foundational knowledge of AI tools, practical skills, and prompt engineering.',
   '{"required_lesson_ids": ["lesson-0101", "lesson-0102", "lesson-0103", "lesson-0201", "lesson-0202", "lesson-0203", "lesson-0301", "lesson-0302", "lesson-0303"]}'),
  ('cert-forex', 'forex-trading-bot', 'AI Forex Trading Bot', 'Demonstrates ability to build and deploy an AI-powered forex trading system.',
   '{"required_lesson_ids": ["lesson-0401", "lesson-0402", "lesson-0403", "lesson-0501", "lesson-0502", "lesson-0503", "lesson-0601", "lesson-0602"]}'),
  ('cert-reviews', 'five-star-reviews', '5-Star Review System', 'Demonstrates ability to build AI-powered review management and reputation systems.',
   '{"required_lesson_ids": ["lesson-0701", "lesson-0702", "lesson-0801", "lesson-0802", "lesson-0803", "lesson-0901", "lesson-0902"]}'),
  ('cert-intake', 'intake-lead-routing', 'AI Intake & Lead Routing', 'Demonstrates ability to build AI-powered lead intake, qualification, and routing systems.',
   '{"required_lesson_ids": ["lesson-1401", "lesson-1402", "lesson-1403", "lesson-1501", "lesson-1502", "lesson-1503", "lesson-1601", "lesson-1602", "lesson-1603"]}'),
  ('cert-receptionist', 'ai-receptionist', 'AI Receptionist & Call Handling', 'Demonstrates ability to build and deploy AI-powered phone answering and call handling systems.',
   '{"required_lesson_ids": ["lesson-1701", "lesson-1702", "lesson-1703", "lesson-1801", "lesson-1802", "lesson-1803", "lesson-1901", "lesson-1902"]}'),
  ('cert-proposals', 'proposal-generator', 'AI Proposal & Estimate Generator', 'Demonstrates ability to build AI-powered proposal writing and estimate generation tools.',
   '{"required_lesson_ids": ["lesson-2001", "lesson-2002", "lesson-2003", "lesson-2101", "lesson-2102", "lesson-2103", "lesson-2201", "lesson-2202", "lesson-2203"]}'),
  ('cert-builder', 'ai-platform-builder', 'AI Platform Builder', 'Demonstrates ability to build and deploy complete AI-powered SaaS platforms.',
   '{"required_lesson_ids": ["lesson-1001", "lesson-1002", "lesson-1003", "lesson-1101", "lesson-1102", "lesson-1103", "lesson-1201", "lesson-1202", "lesson-1203", "lesson-1301", "lesson-1302", "lesson-1303"]}');

-- Note: To make yourself an admin after signing up, run:
-- UPDATE profiles SET role = 'admin' WHERE email = 'your-email@example.com';
