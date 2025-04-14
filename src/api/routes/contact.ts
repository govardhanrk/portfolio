import { handleContactForm } from "../contact";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await handleContactForm(data);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to process contact form submission" 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
} 