import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Default to localhost if not specified, but prefer environment variable
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:8089';
    const headerName = process.env.BACKEND_HEADER_NAME;
    const headerValue = process.env.BACKEND_HEADER_VALUE;
    
    // Construct the full URL. Assuming the backend has a specific endpoint for contact.
    // If the user didn't specify the exact path, I'll assume /api/contact or similar, 
    // but based on "hit service backend", I'll just append /contact or use the base if it's a direct endpoint.
    // Let's assume the backendUrl is the base and we append /api/send-email or similar. 
    // Since I don't know the exact backend endpoint, I will use a generic one or ask.
    // However, the user said "form contact akan hit service backend". 
    // I'll assume the backend URL provided is the BASE URL.
    // I'll append `/api/contact` or similar. 
    // Actually, to be safe, I'll assume the user might want to configure the full path.
    // But for now, I'll use `${backendUrl}/api/contact` as a reasonable default, 
    // or just forward to `${backendUrl}` if it looks like a full endpoint.
    // Given "localhost:8089", it's likely a base.
    
    // Let's try to hit the backend.
    const response = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [headerName]: headerValue,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: 'Failed to send message', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
