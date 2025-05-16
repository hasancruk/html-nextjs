export default function Benefits(props: any) {
  return (
    <html lang="en">
      <body>
        <main>
          <h1>{props.title || "Benefits page"}</h1>
          <section>
            <h2>Reasons</h2>
            <ul>
              <li>HTML is simpler for the browser to process</li>
              <li>You can progressively enhance at a much lower incremental cost</li>
            </ul>
          </section>
        </main>
      </body>
    </html>

  );
}
