---
title: "The AI Glossary You Actually Need"
description: "Cut through the jargon. Here are the 15 AI terms experienced professionals need to understand—explained in plain English, without the BS."
pubDate: 2026-01-18
author: "Andreas Duess"
heroImage: "/images/meeting-room.webp"
tags: ["AI literacy", "practical AI", "professional development"]
draft: false
---

I teach AI strategy at business school. I advise companies on AI implementation. And I spend half my time translating jargon that consultants and vendors use as a smokescreen.

Last week, I watched a senior executive - 25 years in her industry - sit through a vendor pitch where they threw around "multi-modal RAG" and "fine-tuned LLMs" like everyone knew what that meant. She didn't ask questions. She just nodded and took notes.

Later, she pulled me aside: "I need to understand this stuff. I can't make smart decisions about tools I don't understand."

She's right. And she's not alone.

The AI industry has a jargon problem. Every vendor wants you to believe their technology is so sophisticated that only they can explain it. That's by design. Confusion sells expensive consulting contracts.

I'm done with that. Below is the AI glossary I give my clients and students. No academic theory. No technical deep dives. Just the 15 terms you actually need to understand to use AI effectively and make informed decisions about it.

If you already know this stuff cold, great, you're ahead of the game. For everyone else, keep this handy next time someone starts throwing around AI buzzwords in a meeting. Better yet, use it to ask the tough questions vendors are hoping you won't ask.

---

## Model

A model is the AI system you're interacting with. When you open ChatGPT or Claude, you're using a model: a computer program trained to understand your input and generate a useful response.

Think of it like this: if AI was a car, the model is the specific make and model you're driving. Different models have different capabilities, costs, and purposes. Some models are built for conversation (like ChatGPT), others for generating images (like Midjourney), and others for specific tasks like analyzing medical data or detecting fraud.

**Why it matters**: Not all models are created equal. Understanding that you're choosing between different models (not just "AI") helps you pick the right tool for the job.

## LLM (Large Language Model)

An LLM is a type of model specifically designed to understand and generate text. The "large" part refers to the massive amount of data these models are trained on: huge portions of the internet, books, articles, and more.

ChatGPT, Claude, Gemini, and similar tools are all LLMs. They're called "language" models because they specialize in text, though most can now handle images, audio, and other inputs too.

**Why it matters**: When people say "LLM," they're usually talking about the chatbot-style AI tools most of us use daily. It's helpful to know this is a specific category of AI, not the whole field.

## Prompt

A prompt is what you type into an AI tool to get a response. It's your input, your question, your request. Simple as that.

But here's what took me months to figure out: the quality of your prompt directly determines the quality of the response. Ask a vague question, get a vague answer. Provide context and specifics, get something useful.

I've learned that good prompts typically include:
- What you want the AI to do
- What role or perspective it should take
- What format you want the output in
- Any relevant context or constraints

**Why it matters**: "Prompt engineering" sounds fancy, but it's really just learning to ask better questions. The experienced professionals I know who get the most value from AI aren't the most technical. They're the ones who've learned to be specific and clear about what they need.

## Hallucination

A hallucination is when AI makes stuff up. Not in a quirky, creative way. In a confident, this-sounds-totally-real-but-is-completely-wrong way.

I've watched AI invent statistics, cite papers that don't exist, and fabricate product features with absolute certainty. It doesn't know it's making things up. It's just predicting what sounds plausible based on its training.

**Why it matters**: Never trust AI output without verification, especially for facts, figures, or anything important. This is where your experience becomes critical—you have the judgment to spot when something sounds off, even if it's presented confidently.

## Training

Training is how an AI model learns. Before you ever interact with ChatGPT or Claude, these models have been "trained" on massive amounts of text, images, code, and other data. They analyze patterns in this data to learn how language works, what facts are commonly referenced, and how to generate coherent responses.

Think of it like this: if you spent years reading every book in a library, you'd develop a pretty good sense of how to write. That's roughly what's happening during training, except at massive scale.

**Why it matters**: Understanding training helps you grasp what AI knows (and doesn't know). A model trained through mid-2023 won't know about events from 2024. A model trained primarily on English text will struggle with other languages. The training determines the model's baseline capabilities.

## Token

A token is roughly a word or part of a word. Most AI models charge by the token, both for what you input and what they output.

For example, the sentence "AI is transforming business" might be broken into six tokens: "AI," "is," "transform," "ing," "business," and the period.

**Why it matters**: Two reasons. First, cost. If you're paying per token, longer conversations cost more. Second, limitations. Most models have a "context window" (see below) measured in tokens. Understanding tokens helps you manage both costs and what the model can handle.

## Context Window

The context window is how much information an AI model can "remember" in a single conversation. Once you hit that limit, it starts forgetting earlier parts of your chat.

Think of it as the model's short-term memory. Some models have small context windows (a few thousand tokens), while others can handle hundreds of thousands of tokens, entire books' worth of text.

**Why it matters**: If you're working on a long document or having an extended conversation, you need to know the model's limits. When it hits the context window limit, it won't remember what you discussed at the start. This is why sometimes ChatGPT seems to "forget" instructions you gave earlier.

## RAG (Retrieval-Augmented Generation)

RAG is how AI tools access information they weren't trained on: your company's internal documents, your customer database, or last week's sales figures.

Here's how it works: when you ask a question, the system first searches your documents or databases to find relevant information, then feeds that information to the AI model along with your question. The model uses this fresh context to generate its response.

**Why it matters**: This is the difference between AI that can only answer general questions and AI that can actually help with your specific work. If you're evaluating AI tools for your organization, ask how they handle RAG. That's what makes AI practically useful versus just interesting.

## Agent

An agent is an AI system that can take actions on your behalf, not just answer questions. Unlike ChatGPT, which waits for your next prompt, an agent can plan, use tools, and complete multi-step tasks autonomously.

For example, you might tell an agent: "Research our top three competitors' pricing and create a comparison spreadsheet." It would search the web, extract data, create the spreadsheet, and hand you the finished product. No additional prompts required.

**Why it matters**: This is where AI starts to feel genuinely transformative. We're moving from "ask and answer" to "delegate and review." But we're also early days. Most agents still need human oversight to catch when they go off the rails.

## Multi-Modal

Multi-modal means an AI can work with multiple types of input and output—text, images, audio, video—within the same conversation.

For instance, you can upload a photo to ChatGPT and ask it to analyze what's in it. Or you can ask Claude to generate a chart based on data you describe. You're not limited to just text anymore.

**Why it matters**: This expands what you can do with AI. Need to analyze a competitor's product photo? Extract data from a screenshot? Transcribe a meeting recording? Multi-modal models can handle all of it in one conversation.

## Fine-Tuning

Fine-tuning is when you take a general AI model and give it additional training on specific data to make it better at particular tasks. It's like sending a generalist to specialized training.

For example, you might fine-tune a model on your company's customer service conversations to make it respond in your brand's voice and handle your specific product questions better.

**Why it matters**: This is one path to customizing AI for your organization. It's more involved than just writing good prompts, but less expensive than building a model from scratch. If vendors are pitching you "custom AI solutions," ask whether they're fine-tuning an existing model or doing something else.

## Inference

Inference is when the AI model actually runs: when it processes your input and generates a response. Every time you hit "send" in ChatGPT, that's inference.

**Why it matters**: Mainly for understanding costs and performance. Companies often separate "training costs" (one-time, expensive) from "inference costs" (per-use, ongoing). If you're evaluating AI tools for your organization, ask about inference costs. That's what you'll actually pay regularly.

## GPT (Generative Pre-trained Transformer)

GPT describes how modern language models work:
- **Generative**: They create new content, not just classify or analyze
- **Pre-trained**: They learn general knowledge first, then can be customized
- **Transformer**: The underlying technology that makes them work (see below)

**Why it matters**: It's helpful to know what the acronym means, even if you don't need the technical details. When people say "GPT-4" or "GPT-style models," they're referring to this approach.

## Transformer

The transformer is the algorithmic breakthrough that made modern AI possible. Before transformers, AI could only process text word-by-word in sequence. Transformers let AI look at all the words at once and understand how they relate to each other.

I don't need to understand the technical details any more than I need to understand combustion engines to drive a car. What matters is knowing this: transformers are why AI suddenly got good at understanding context and generating coherent responses.

**Why it matters**: When you hear "transformer architecture" or "transformer-based models," people are referring to the core technology that powers almost every modern AI tool. It's the foundation everything else is built on.

## Generative AI

Generative AI refers to AI systems that create new content: text, images, code, music, video. This is different from AI that just analyzes or classifies things.

ChatGPT is generative: it creates new text. So is Midjourney (creates images) and GitHub Copilot (creates code). By contrast, spam filters and fraud detection systems are not generative. They just classify existing content.

**Why it matters**: When executives talk about "the generative AI revolution," this is what they mean. The ability to create, not just analyze, is what's making AI feel transformative to most organizations. It's also why we're seeing such rapid adoption. Creation tools are immediately useful to almost everyone.

---

## What I Left Out

You'll notice some terms missing from this list. Words like "supervised learning," "reinforcement learning from human feedback," and "artificial general intelligence." I left those out on purpose.

Not because they're unimportant, but because you don't need them to use AI effectively or make smart decisions about it. They're academic concepts or speculative future scenarios. What I've given you here is the working vocabulary you need for Monday morning.

If someone starts throwing around terms that aren't on this list, I recommend asking them to explain in plain English. Half the time, they're using jargon to avoid admitting they don't fully understand it themselves.

---

## Your Turn

Here's my challenge: next time you're in a meeting and someone uses an AI term you don't recognize, ask them to explain it. Not in a "gotcha" way, but genuinely. "Help me understand what you mean by that."

I've found that nine times out of 10, they'll either:
1. Give you a clear explanation (great, you learned something)
2. Realize they can't explain it clearly (also great, now everyone knows we need more clarity)

We've got decades of experience asking good questions and cutting through BS. That doesn't stop being valuable just because the BS is now about AI instead of some other technology.

The best use of AI isn't replacing our judgment. It's amplifying it. But we can't make good judgments about something we don't understand.
