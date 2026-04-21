"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function BlogSearchForm({ defaultValue }: { defaultValue?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (value.trim()) params.set("search", value.trim());
    params.set("page", "1");
    router.push(`/blogs?${params.toString()}`);
  };

  const handleClear = () => {
    setValue("");
    router.push("/blogs");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-6 max-w-2xl">
      <div className="flex-1">
        <label className="block text-xs text-muted-foreground mb-3 tracking-[0.25em] uppercase">
          [Search Records]
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="ENTER KEYWORDS..."
          className="w-full bg-transparent border-0 border-b-2 border-border pb-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary transition-colors"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground text-xs px-5 h-9 uppercase tracking-[0.2em] rounded-none hover:bg-[oklch(0.424_0.199_265.638)]"
        style={{ transition: "none" }}
      >
        QUERY
      </button>
      {defaultValue && (
        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-muted-foreground uppercase tracking-[0.2em] hover:text-foreground pb-2.5 border-b-2 border-transparent"
          style={{ transition: "none" }}
        >
          CLEAR ×
        </button>
      )}
    </form>
  );
}
