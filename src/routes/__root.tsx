import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorDot } from "@/components/effects/CursorDot";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-card-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Godwin Idiovo | Growth Systems Built to Scale" },
      {
        name: "description",
        content:
          "Full-stack growth execution for businesses ready to scale without chaos. Traffic, funnels, and backend automation, built into one engine.",
      },
      { name: "author", content: "Godwin Idiovo" },
      { property: "og:title", content: "Godwin Idiovo | Growth Systems Built to Scale" },
      {
        property: "og:description",
        content:
          "Media buying, conversion funnels, and backend automation, built into one engine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Godwin Idiovo | Growth Systems Built to Scale" },
      { name: "description", content: "Godwin's Growth Engine is a multi-page portfolio website showcasing Godwin Idiovo's expertise in media buying, conversion funnels, and backend automation." },
      { property: "og:description", content: "Godwin's Growth Engine is a multi-page portfolio website showcasing Godwin Idiovo's expertise in media buying, conversion funnels, and backend automation." },
      { name: "twitter:description", content: "Godwin's Growth Engine is a multi-page portfolio website showcasing Godwin Idiovo's expertise in media buying, conversion funnels, and backend automation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1070067-cda7-4ddd-bb5b-ce81ef70c070/id-preview-0d579635--30c38655-f690-455c-8cde-5d15011c8ee5.lovable.app-1780407382976.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1070067-cda7-4ddd-bb5b-ce81ef70c070/id-preview-0d579635--30c38655-f690-455c-8cde-5d15011c8ee5.lovable.app-1780407382976.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://godwinidiovo.com/#website",
              url: "https://godwinidiovo.com/",
              name: "Godwin Idiovo",
              description:
                "Media buying, conversion funnels, and backend automation, built into one engine.",
              publisher: { "@id": "https://godwinidiovo.com/#person" },
              inLanguage: "en",
            },
            {
              "@type": "Person",
              "@id": "https://godwinidiovo.com/#person",
              name: "Godwin Idiovo",
              url: "https://godwinidiovo.com/",
              jobTitle: "Media Buyer, Funnel Builder, Automation Specialist",
              email: "mailto:hello@godwinidiovo.com",
              sameAs: ["https://www.linkedin.com/in/oghenerukevwegodwinidiovo/"],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CursorDot />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
