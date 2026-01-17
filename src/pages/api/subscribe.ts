import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const CONVERTKIT_API_KEY = import.meta.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = '8984502';

  if (!CONVERTKIT_API_KEY) {
    return new Response(JSON.stringify({
      error: 'ConvertKit API key not configured'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();

    if (!email) {
      return new Response(JSON.stringify({
        error: 'Email is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        error: 'Invalid email format'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Subscribe to ConvertKit
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('ConvertKit API error:', data);
      return new Response(JSON.stringify({
        error: 'Failed to subscribe. Please try again.'
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully subscribed!'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({
      error: 'An unexpected error occurred. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
