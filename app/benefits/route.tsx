import { type ReactNode } from "react";
import Benefits from "./component";

async function getPage(component: ReactNode): Promise<string> {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export const dynamic = "force-static";

export async function GET() {
  const page = await getPage(<Benefits title="Benefits of server rendering" />);

  return new Response(
    page,
    {
      status: 200,
      statusText: "OK",
      headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
    }
  );
}
