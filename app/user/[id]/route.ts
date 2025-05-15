export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const nextPageId = Math.floor(Math.random() * 20);
  const page = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>SSR User: ${id}</title>
  </head>
  <body>
    <header>
      <h1>SSR User ID: ${id}</h1>
    </header>

    <main>
      <h2>User page</h2>
      <p>Hello user: ${id}</p> 
      <p>Try changing the URL for another user ID. For example: <a href="/user/${nextPageId}">User ${nextPageId}</a></p>
    </main>
  </body>
</html>
  `;

  return new Response(
    page,
    {
      status: 200,
      statusText: "OK",
      headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
    }
  );
}
