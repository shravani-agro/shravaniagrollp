import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";
import { z } from "zod";

const productSearchSchema = z.object({
  category: z.string().optional().catch("all"),
  q: z.string().optional(),
});

export const Route = createFileRoute("/products/")({
  validateSearch: (search) => productSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Shop all agricultural inputs — Shravani Agroproducts Enterprises LLP" },
      {
        name: "description",
        content:
          "Browse seeds, crop protection, plant nutrition, irrigation, machinery, protected cultivation and farm inputs from Shravani Agroproducts Enterprises LLP.",
      },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const navigate = Route.useNavigate();
  const { category: cat = "all", q = "" } = Route.useSearch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const setCat = (newCat: string) => {
    navigate({
      search: (prev: { category?: string; q?: string }) => ({
        ...prev,
        category: newCat === "all" ? undefined : newCat,
      }),
    });
  };
  const [sort, setSort] = useState<string>("relevance");

  let list = cat === "all" ? products : products.filter((p) => p.category === cat);
  
  if (q) {
    const qLower = q.toLowerCase();
    list = list.filter((p) => 
      p.name.toLowerCase().includes(qLower) || 
      p.description.toLowerCase().includes(qLower)
    );
  }

  if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container-x pt-6 sm:pt-8 lg:pt-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-ink-soft mb-4">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <span className="text-ink">All products</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 sm:pb-8 border-b border-border">
        <div>
          <div className="text-eyebrow">Catalog</div>
          <h1 className="mt-1 sm:mt-2 text-display text-2xl sm:text-3xl lg:text-4xl">
            {q ? `Search results for "${q}"` : cat === "all"
              ? "All agricultural inputs"
              : categories.find((c) => c.slug === cat)?.name}
          </h1>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-ink-soft">
            {list.length} product{list.length === 1 ? "" : "s"} · GST-inclusive pricing · Ships pan-India
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden inline-flex items-center gap-1.5 h-10 rounded-full border border-border bg-surface px-4 text-xs font-medium text-ink hover:border-primary/40"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
            <span>Filters</span>
          </button>
          <div className="flex items-center gap-2">
            <label className="text-xs text-ink-soft">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 rounded-full bg-surface border border-border px-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Category Chips (Horizontal Scroll) */}
      <div className="lg:hidden mt-4 -mx-4 px-4 overflow-x-auto flex items-center gap-2 pb-2">
        <button
          onClick={() => setCat("all")}
          className={`shrink-0 text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors ${
            cat === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-surface border border-border text-ink-soft hover:text-ink"
          }`}
        >
          All ({products.length})
        </button>
        {categories
          .filter((c) => products.some((p) => p.category === c.slug))
          .map((c) => (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`shrink-0 text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                cat === c.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface border border-border text-ink-soft hover:text-ink"
              }`}
            >
              {c.name}
            </button>
          ))}
      </div>

      <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className={`space-y-6 ${mobileFiltersOpen ? "block" : "hidden lg:block"} pb-4 lg:pb-0 border-b lg:border-b-0 border-border`}>
          <div className="flex items-center gap-2 text-eyebrow">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Category
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setCat("all")}
                  className={`flex w-full items-center justify-between text-sm px-2 py-1.5 rounded-md ${cat === "all" ? "bg-primary/10 text-primary font-medium" : "text-ink-soft hover:text-ink"}`}
                >
                  <span>All</span>
                  <span className="tabular-nums text-xs opacity-70">{products.length}</span>
                </button>
              </li>
              {categories
                .filter((c) => products.some((p) => p.category === c.slug))
                .map((c) => {
                  const count = products.filter((p) => p.category === c.slug).length;
                  return (
                    <li key={c.slug}>
                      <button
                        onClick={() => setCat(c.slug)}
                        className={`flex w-full items-center justify-between text-sm px-2 py-1.5 rounded-md ${cat === c.slug ? "bg-primary/10 text-primary font-medium" : "text-ink-soft hover:text-ink"}`}
                      >
                        <span className="text-left">{c.name}</span>
                        <span className="tabular-nums text-xs opacity-70">{count}</span>
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Availability
            </div>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="checkbox" className="accent-primary" /> In stock only
            </label>
          </div>
          <div>
            <div className="text-xs font-semibold text-ink mb-3 uppercase tracking-wider">
              Rating
            </div>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="checkbox" className="accent-primary" /> 4 stars & above
            </label>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <div className="text-display text-lg">No products match those filters.</div>
              <button
                onClick={() => navigate({ search: { category: undefined, q: undefined } })}
                className="mt-3 text-sm text-primary hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
