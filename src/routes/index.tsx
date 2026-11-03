import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Leaf, Droplets, Shield, Tractor } from "lucide-react";
import { categories, crops, products } from "@/lib/catalog";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Home,
});

const heroFields = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80";
const handsSeedling = "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80";
const seedsFlatlay = "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80";
const irrigation = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80";
const farmerPortrait = "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1000&q=80";

const catIcons: Record<string, typeof Leaf> = {
  seeds: Leaf,
  "crop-protection": Shield,
  fertilizers: Sparkles,
  "farm-machinery": Tractor,
  irrigation: Droplets,
};

function Home() {
  return (
    <div>
      {/* BENTO HERO */}
      <section className="container-x pt-8 lg:pt-12">
        <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:auto-rows-fr">
          {/* Hero tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 lg:row-span-2 relative overflow-hidden rounded-3xl bg-ink text-background dark:bg-[oklch(0.16_0.015_90)] dark:text-[oklch(0.976_0.012_90)] min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]"
          >
            <img
              src={heroFields}
              alt="Aerial view of terraced Indian farmland at golden hour"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-transparent dark:from-[oklch(0.16_0.015_90)/0.85] dark:via-[oklch(0.16_0.015_90)/0.4]" />
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-[oklch(0.976_0.012_90)/0.8]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Agricultural Catalog · Now Shipping
              </div>
              <div className="max-w-2xl">
                <h1 className="text-display text-[2rem] sm:text-5xl lg:text-[4rem] leading-[1.04] sm:leading-[0.98] text-[oklch(0.976_0.012_90)]">
                  Every input the season asks for,{" "}
                  <span className="text-accent">on one shelf.</span>
                </h1>
                <p className="mt-5 max-w-lg text-[0.98rem] text-[oklch(0.976_0.012_90)/0.8] leading-relaxed">
                  Shravani Agroproducts Enterprises LLP supplies certified hybrid seeds, selective crop protection,
                  balanced fertilizers, and high-pressure farm machinery directly to farmers and dealers across India.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/products"
                    className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    Shop Verified Products
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                  <Link
                    to="/dealer-registration"
                    className="inline-flex h-12 items-center rounded-full border border-[oklch(0.976_0.012_90)/0.3] px-6 text-sm font-medium text-[oklch(0.976_0.012_90)] hover:bg-[oklch(0.976_0.012_90)/0.1]"
                  >
                    Become a dealer
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-4 surface-card p-6 sm:p-8 flex flex-col justify-between min-h-[240px]"
          >
            <div className="text-eyebrow">Trusted by the field</div>
            <div className="mt-2 grid grid-cols-2 gap-6">
              {[
                { n: "84,000+", l: "Farmers served" },
                { n: "1,200+", l: "Dealer partners" },
                { n: "18", l: "States covered" },
                { n: "100%", l: "Verified Inputs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-display text-2xl sm:text-3xl text-ink tabular-nums">
                    {s.n}
                  </div>
                  <div className="text-xs text-ink-soft mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Farmer story tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 relative overflow-hidden rounded-3xl min-h-[260px] group"
          >
            <img
              src={farmerPortrait}
              alt="Portrait of a farmer at golden hour"
              width={1000}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.015_90)/0.85] via-[oklch(0.16_0.015_90)/0.2] to-transparent dark:from-ink/85 dark:via-ink/20" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="text-eyebrow text-[oklch(0.976_0.012_90)/0.7] dark:text-background/70">Farmer stories</div>
              <div className="mt-2 text-display text-xl text-[oklch(0.976_0.012_90)] dark:text-background max-w-[16rem]">
                "Ankur ARDL-183 gave 12 pickings and top market price."
              </div>
              <div className="mt-3 text-xs text-[oklch(0.976_0.012_90)/0.7] dark:text-background/70">
                Kishan Patel · Vegetable Grower · Gujarat
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY BENTO */}
      <section className="container-x mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-eyebrow">Shop by category</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">Featured Categories</h2>
          </div>
          <Link
            to="/products"
            className="text-sm font-medium text-primary hover:underline"
          >
            Browse all products ({products.length}) →
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-6 md:grid-rows-2 md:auto-rows-fr">
          {/* Featured wide tile - Seeds */}
          {categories[0] && (
            <Link
              to="/products"
              search={{ category: categories[0].slug }}
              className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl bg-primary text-primary-foreground min-h-[320px] md:min-h-full"
            >
              <img
                src={seedsFlatlay}
                alt="Flat-lay of seed packets and grain"
                width={1200}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/40" />
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] opacity-80">
                  <Leaf className="h-3.5 w-3.5" /> {categories[0].name}
                </div>
                <div>
                  <div className="text-display text-3xl sm:text-4xl leading-[1] max-w-[18ch]">
                    High-yield hybrid seeds with early maturity and disease resistance.
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                    Explore seeds ({categories[0].count})
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other categories */}
          {categories.slice(1).map((c, i) => {
            const Icon = catIcons[c.slug] ?? Leaf;
            const isWide = i === 1; // fertilizers
            return (
              <Link
                key={c.slug}
                to="/products"
                search={{ category: c.slug }}
                className={`group relative overflow-hidden rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[160px] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
                  isWide ? "md:col-span-3" : "md:col-span-3"
                }`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${i === 1 ? "bg-accent/80" : "bg-[oklch(0.16_0.015_90)/0.7]"}`} />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="relative">
                  <div className="text-display text-lg leading-tight text-white">{c.name}</div>
                  <div className="mt-1 text-xs tabular-nums text-white/70">
                    {c.count} {c.count === 1 ? "product" : "products"} · {c.tagline}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SHOP BY CROP */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
          <div>
            <div className="text-eyebrow">Shop by crop</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">
              Growing <span className="text-primary">what?</span>
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Select your crop to see targeted seed varieties, balanced plant nutrition,
              crop defense herbicides, and spray machinery tailored for its stages.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {crops.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <Link
                  to="/products"
                  className="block rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.015_90)/0.6] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <div className="text-display text-sm text-white leading-tight">{c.name}</div>
                      <div className="text-[0.65rem] text-white/70 mt-0.5">{c.season}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PRODUCTS (7 REAL PRODUCTS) */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-eyebrow">Our Catalog</div>
            <h2 className="mt-2 text-display text-3xl sm:text-4xl">Verified Agricultural Products</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Authentic brands: Ankur Seeds, Seminis Bayer, Tropical Agro, IFFCO, Baramati Agro, Aditya Chemicals & RAMA MULTITECH.
            </p>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">
            View All ({products.length}) →
          </Link>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* KNOWLEDGE + MACHINERY SPLIT */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="grid gap-3 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl bg-surface p-8 sm:p-10 flex flex-col justify-between min-h-[360px] furrow-pattern">
            <div>
              <div className="text-eyebrow">Knowledge Centre</div>
              <h3 className="mt-3 text-display text-3xl sm:text-4xl max-w-lg leading-[1.05]">
                Agronomic guidance for field beans, weed control and crop nutrition.
              </h3>
              <p className="mt-4 text-ink-soft max-w-md leading-relaxed">
                Dosage guides, deficiency diagnosis, herbicide application timing, and spray equipment maintenance
                written and reviewed by agricultural experts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 sm:mt-8">
              {[
                { t: "Dolichos & Pole Beans — Sowing to picking playbook", k: "Crop Guide" },
                { t: "Correcting Zinc deficiency in Paddy & Vegetables", k: "Plant Nutrition" },
                { t: "Pre-emergence herbicide safety guidelines", k: "Weed Control" },
                { t: "Maintaining 2-in-1 Knapsack & Battery Sprayers", k: "Machinery Guide" },
              ].map((a) => (
                <Link
                  key={a.t}
                  to="/knowledge"
                  className="rounded-xl bg-background border border-border p-4 hover:border-primary/40 group"
                >
                  <div className="text-[0.65rem] uppercase tracking-widest text-primary">{a.k}</div>
                  <div className="mt-1.5 text-sm font-medium text-ink leading-snug group-hover:text-primary">
                    {a.t}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 relative overflow-hidden rounded-3xl min-h-[360px] group">
            <img
              src={irrigation}
              alt="Farmer spraying crops in field"
              width={1400}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/85 via-primary/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/80">
                Equipment & Sprayers
              </div>
              <div className="mt-2 text-display text-2xl sm:text-3xl text-primary-foreground max-w-[20ch] leading-[1.05]">
                RAMA MULTITECH 2-in-1 High Pressure Sprayers.
              </div>
              <Link
                to="/products/rama-multitech-high-pressure-sprayer"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-primary-foreground text-primary px-5 text-sm font-medium w-fit hover:opacity-90"
              >
                View Sprayer Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER CTA */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-background dark:bg-[oklch(0.16_0.015_90)] dark:text-[oklch(0.976_0.012_90)] p-8 sm:p-12 lg:p-16">
          <img
            src={handsSeedling}
            alt="Hands cradling seedlings in dark soil"
            width={1200}
            height={1400}
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40 hidden md:block"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent md:to-ink/20 dark:from-[oklch(0.16_0.015_90)] dark:via-[oklch(0.16_0.015_90)/0.9] dark:md:to-[oklch(0.16_0.015_90)/0.2]" />
          <div className="relative max-w-xl">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-accent dark:text-accent">
              Dealer Program
            </div>
            <h3 className="mt-3 text-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] text-[oklch(0.976_0.012_90)] dark:text-[oklch(0.976_0.012_90)]">
              Retail Shravani Agroproducts Enterprises LLP in your district.
            </h3>
            <p className="mt-4 text-[oklch(0.976_0.012_90)/0.7] dark:text-[oklch(0.976_0.012_90)/0.7] leading-relaxed">
              Tier-based pricing, GST invoicing, protected territories, and bulk delivery for agricultural dealers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/dealer-registration"
                className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Apply to become a dealer
              </Link>
              <Link
                to="/products"
                className="inline-flex h-12 items-center rounded-full border border-[oklch(0.976_0.012_90)/0.3] px-6 text-sm font-medium text-[oklch(0.976_0.012_90)] hover:bg-[oklch(0.976_0.012_90)/0.1]"
              >
                Browse catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4" />
    </div>
  );
}
