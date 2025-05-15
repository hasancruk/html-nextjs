export const dynamic = "force-static"; 

export async function GET() {
  const page = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>About experiment</title>
  </head>
  <body>
    <header>
      <h1>Static Next Experiment</h1>
    </header>

    <main>
      <h2>About page</h2>
      <p>This is an experiment to demo how Next.js really is a backend framework.</p> 
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
