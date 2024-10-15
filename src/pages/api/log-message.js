// To Prevent Prerendering of the API Route
export const prerender = false;


export async function POST({ request }) {
  try {
    const contentType = request.headers.get('content-type');
    let message;

    if (contentType && contentType.includes('application/json')) {
      const body = await request.text();
      if (body) {
        const data = JSON.parse(body);
        message = data.message;
      }
    }

    if (message) {
      console.log("Received message:", message);
    } else {
      console.log("Received empty or non-JSON request");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}