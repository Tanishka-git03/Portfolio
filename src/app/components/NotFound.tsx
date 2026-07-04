import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center">
      <p className="text-8xl font-semibold text-muted mb-4 select-none">404</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-3">
        Page not found
      </h1>
      <p className="text-muted-foreground max-w-sm mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <Home size={15} /> Go home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-accent transition-colors text-sm font-medium"
        >
          <ArrowLeft size={15} /> Go back
        </button>
      </div>
    </div>
  );
}
