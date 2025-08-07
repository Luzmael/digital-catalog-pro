export const config = { runtime: 'edge' };

export default async (request) => {
  const url = new URL(request.url);
  const store = url.searchParams.get('store');
  const file = url.searchParams.get('file');
  
  return new Response(JSON.stringify({
    store,
    file,
    message: "Esta función maneja el caching automático"
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600'
    }
  });
};
