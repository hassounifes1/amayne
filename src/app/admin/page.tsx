'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  BarChart3,
  Eye,
  ShoppingBag,
  TrendingUp,
  Users,
  Wallet,
  LogOut,
  RefreshCw,
  Smartphone,
  Monitor,
  MapPin,
  Package,
  Percent,
  Clock,
  Lock,
  Database,
  Settings2,
  type LucideIcon,
} from 'lucide-react';
import type { DashboardStats, StatsRange } from '@/lib/analytics/types';

const RANGES: { id: StatsRange; label: string }[] = [
  { id: 'today', label: "Aujourd'hui" },
  { id: '7d', label: '7 jours' },
  { id: '30d', label: '30 jours' },
  { id: 'all', label: 'Tout' },
];

function fmt(n: number) {
  return new Intl.NumberFormat('fr-FR').format(n);
}

function fmtMad(n: number) {
  return `${fmt(n)} MAD`;
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function fmtDateTime(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function pctChange(current: number, previous: number) {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Math.round(((current - previous) / previous) * 1000) / 10;
}

function Delta({ current, previous }: { current: number; previous: number }) {
  if (previous === 0 && current === 0) return null;
  const delta = pctChange(current, previous);
  const up = delta >= 0;
  return (
    <span className={`text-xs font-medium ${up ? 'text-emerald-600' : 'text-red-500'}`}>
      {up ? '+' : ''}{delta}% vs période préc.
    </span>
  );
}

function KpiCard({
  icon: Icon,
  label,
  value,
  sub,
  delta,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  delta?: { current: number; previous: number };
}) {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center">
          <Icon size={20} className="text-brand-amber" />
        </div>
        {delta && <Delta current={delta.current} previous={delta.previous} />}
      </div>
      <p className="text-sm text-brand-muted mb-1">{label}</p>
      <p className="text-2xl font-bold text-brand-ink">{value}</p>
      {sub && <p className="text-xs text-brand-muted mt-1">{sub}</p>}
    </div>
  );
}

function MiniBarChart({ daily }: { daily: DashboardStats['daily'] }) {
  const max = Math.max(...daily.map(d => Math.max(d.visitors, d.orders, 1)), 1);
  return (
    <div className="flex items-end gap-1 h-40 pt-4">
      {daily.map(d => (
        <div key={d.date} className="flex-1 flex flex-col items-center gap-1 min-w-0">
          <div className="w-full flex items-end justify-center gap-0.5 h-32">
            <div
              className="w-[40%] bg-brand-amber/30 rounded-t"
              style={{ height: `${(d.visitors / max) * 100}%`, minHeight: d.visitors ? 4 : 0 }}
              title={`${d.visitors} visiteurs`}
            />
            <div
              className="w-[40%] bg-brand-forest rounded-t"
              style={{ height: `${(d.orders / max) * 100}%`, minHeight: d.orders ? 4 : 0 }}
              title={`${d.orders} commandes`}
            />
          </div>
          <span className="text-[10px] text-brand-muted truncate w-full text-center">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      setError('Mot de passe incorrect ou dashboard non configuré.');
      return;
    }
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4">
      <form onSubmit={submit} className="bg-white rounded-2xl border border-brand-border p-8 w-full max-w-md shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-brand-brown flex items-center justify-center mb-6 mx-auto">
          <Lock className="text-brand-amber" size={28} />
        </div>
        <h1 className="font-display text-2xl font-bold text-center mb-2">Dashboard AMAYNO</h1>
        <p className="text-brand-muted text-sm text-center mb-6">
          Analytics · Conversions · Commandes
        </p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Mot de passe admin"
          className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-amber mb-4"
          autoFocus
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-brand-amber text-brand-brown py-3 rounded-full font-bold hover:bg-brand-honey transition-colors disabled:opacity-50"
        >
          {loading ? 'Connexion…' : 'Accéder au dashboard'}
        </button>
        <p className="text-xs text-brand-muted text-center mt-4">
          Définir <code className="bg-brand-sand px-1 rounded">ADMIN_DASHBOARD_PASSWORD</code> dans EasyPanel
        </p>
      </form>
    </div>
  );
}

function SetupView() {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-brand-border p-8 w-full max-w-2xl shadow-lg">
        <div className="w-14 h-14 rounded-2xl bg-brand-brown flex items-center justify-center mb-6">
          <Settings2 className="text-brand-amber" size={28} />
        </div>
        <h1 className="font-display text-2xl font-bold mb-2">Configuration requise</h1>
        <p className="text-brand-muted mb-6">
          Le dashboard existe déjà, mais il faut d&apos;abord définir le mot de passe admin dans EasyPanel.
        </p>
        <div className="bg-brand-cream rounded-2xl p-5 border border-brand-border mb-6">
          <p className="text-sm font-semibold text-brand-ink mb-2">Variables minimales</p>
          <pre className="text-sm whitespace-pre-wrap text-brand-muted">
ADMIN_DASHBOARD_PASSWORD=TonMotDePasse123
HOSTNAME=0.0.0.0
PORT=3000
ANALYTICS_DATA_DIR=/app/data
          </pre>
        </div>
        <p className="text-sm text-brand-muted">
          Après sauvegarde, relance le service puis ouvre <code className="bg-brand-sand px-1 rounded">/admin</code>.
        </p>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-brand-border p-8 shadow-sm text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-amber/10 flex items-center justify-center mx-auto mb-4">
        <Database size={28} className="text-brand-amber" />
      </div>
      <h2 className="font-semibold text-xl text-brand-ink mb-2">Pas encore de data analytics</h2>
      <p className="text-brand-muted max-w-2xl mx-auto">
        Le tracking est en place. Dès qu&apos;un visiteur entre dans le store, voit un produit, ajoute au panier ou passe commande,
        les chiffres vont apparaître ici automatiquement.
      </p>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [mode, setMode] = useState<'loading' | 'login' | 'setup' | 'ready'>('loading');
  const [range, setRange] = useState<StatsRange>('7d');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadStats = useCallback(async (r: StatsRange) => {
    setLoading(true);
    setError('');
    const res = await fetch(`/api/admin/stats?range=${r}`, { cache: 'no-store' });
    let json: { stats?: DashboardStats; error?: string } | null = null;
    try {
      json = await res.json();
    } catch {
      json = null;
    }

    if (res.status === 503 || json?.error === 'admin_not_configured') {
      setMode('setup');
      setStats(null);
      setLoading(false);
      return;
    }
    if (res.status === 401) {
      setMode('login');
      setLoading(false);
      return;
    }
    if (!res.ok) {
      setError('Impossible de charger les stats.');
      setLoading(false);
      return;
    }
    if (!json?.stats) {
      setError('Réponse analytics invalide.');
      setLoading(false);
      return;
    }
    setStats(json.stats);
    setMode('ready');
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadStats(range);
  }, [range, loadStats]);

  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setMode('login');
    setStats(null);
  };

  if (mode === 'setup') {
    return <SetupView />;
  }

  if (mode === 'login') {
    return <LoginForm onSuccess={() => loadStats(range)} />;
  }

  if (mode === 'loading' && !stats) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <RefreshCw className="animate-spin text-brand-amber" size={32} />
      </div>
    );
  }

  const k = stats?.kpis;
  const cmp = stats?.compare;

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="bg-brand-brown text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-xl md:text-2xl font-bold flex items-center gap-2">
              <BarChart3 size={24} className="text-brand-amber" />
              AMAYNO Dashboard
            </h1>
            <p className="text-white/70 text-sm">
              Visiteurs · Leads · Commandes · CA
              {stats?.meta ? ` · ${fmt(stats.meta.totalEvents)} events` : ''}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {RANGES.map(r => (
              <button
                key={r.id}
                onClick={() => setRange(r.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  range === r.id
                    ? 'bg-brand-amber text-brand-brown'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {r.label}
              </button>
            ))}
            <button
              onClick={() => loadStats(range)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              title="Actualiser"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={logout}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              title="Déconnexion"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">{error}</div>
        )}

        {k && cmp && (
          <>
            {stats.meta.totalEvents === 0 && <EmptyState />}

            <section className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-brand-border p-4 shadow-sm">
                <p className="text-sm text-brand-muted mb-1">Dernière écriture</p>
                <p className="font-semibold text-brand-ink">{fmtDateTime(stats.meta.updatedAt)}</p>
              </div>
              <div className="bg-white rounded-2xl border border-brand-border p-4 shadow-sm">
                <p className="text-sm text-brand-muted mb-1">Rapport généré</p>
                <p className="font-semibold text-brand-ink">{fmtDateTime(stats.meta.generatedAt)}</p>
              </div>
              <div className="bg-white rounded-2xl border border-brand-border p-4 shadow-sm">
                <p className="text-sm text-brand-muted mb-1">Events stockés</p>
                <p className="font-semibold text-brand-ink">{fmt(stats.meta.totalEvents)}</p>
              </div>
            </section>

            <section className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <KpiCard
                icon={Users}
                label="Visiteurs uniques"
                value={fmt(k.visitors)}
                sub={`${fmt(k.sessions)} sessions`}
                delta={{ current: k.visitors, previous: cmp.visitors }}
              />
              <KpiCard icon={Eye} label="Pages vues" value={fmt(k.pageViews)} sub={`${fmt(k.productViews)} produits vus`} />
              <KpiCard icon={ShoppingBag} label="Commandes" value={fmt(k.orders)} delta={{ current: k.orders, previous: cmp.orders }} />
              <KpiCard
                icon={Wallet}
                label="Chiffre d'affaires"
                value={fmtMad(k.revenue)}
                sub={k.avgOrderValue ? `Panier moy. ${fmtMad(k.avgOrderValue)}` : undefined}
                delta={{ current: k.revenue, previous: cmp.revenue }}
              />
              <KpiCard
                icon={Percent}
                label="Taux conversion"
                value={`${k.conversionRate}%`}
                sub={`${k.leadRate}% leads · ${k.cartToOrderRate}% lead→commande`}
              />
              <KpiCard
                icon={TrendingUp}
                label="Entonnoir"
                value={fmt(k.leads)}
                sub={`${fmt(k.addToCart)} panier · ${fmt(k.checkouts)} checkout`}
              />
            </section>

            <section className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-lg">Visiteurs vs Commandes</h2>
                  <div className="flex gap-4 text-xs text-brand-muted">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-brand-amber/30" /> Visiteurs</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-brand-forest" /> Commandes</span>
                  </div>
                </div>
                {stats?.daily && stats.daily.length > 0 ? (
                  <MiniBarChart daily={stats.daily} />
                ) : (
                  <p className="text-brand-muted text-sm py-12 text-center">Pas encore de données pour cette période.</p>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Monitor size={18} className="text-brand-amber" /> Appareils
                  </h2>
                  <div className="space-y-2">
                    {(stats?.devices || []).map(d => (
                      <div key={d.device} className="flex items-center gap-3">
                        {d.device === 'mobile' ? <Smartphone size={16} className="text-brand-muted" /> : <Monitor size={16} className="text-brand-muted" />}
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="capitalize">{d.device === 'mobile' ? 'Mobile' : d.device === 'desktop' ? 'Desktop' : d.device}</span>
                            <span className="font-medium">{d.pct}%</span>
                          </div>
                          <div className="h-2 bg-brand-sand rounded-full overflow-hidden">
                            <div className="h-full bg-brand-amber rounded-full" style={{ width: `${d.pct}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                    {!stats?.devices?.length && <p className="text-sm text-brand-muted">—</p>}
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-lg mb-3">Sources trafic</h2>
                  <div className="space-y-2">
                    {(stats?.trafficSources || []).map(s => (
                      <div key={s.source} className="flex justify-between text-sm">
                        <span className="text-brand-muted truncate">{s.source}</span>
                        <span className="font-medium">{fmt(s.visits)}</span>
                      </div>
                    ))}
                    {!stats?.trafficSources?.length && <p className="text-sm text-brand-muted">—</p>}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
                <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Package size={18} className="text-brand-amber" /> Top produits
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-brand-muted border-b border-brand-border">
                        <th className="text-left py-2 font-medium">Produit</th>
                        <th className="text-right py-2 font-medium">Vues</th>
                        <th className="text-right py-2 font-medium">Cmd</th>
                        <th className="text-right py-2 font-medium">CA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(stats?.topProducts || []).map(p => (
                        <tr key={p.slug} className="border-b border-brand-border/50">
                          <td className="py-2.5 pr-2">
                            <p className="font-medium line-clamp-1">{p.name}</p>
                            <p className="text-xs text-brand-muted">{p.slug}</p>
                          </td>
                          <td className="text-right py-2.5">{p.views}</td>
                          <td className="text-right py-2.5">{p.orders}</td>
                          <td className="text-right py-2.5 font-medium">{fmtMad(p.revenue)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {!stats?.topProducts?.length && <p className="text-brand-muted text-sm py-4">Aucun produit encore.</p>}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
                <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-brand-amber" /> Top villes (commandes)
                </h2>
                <div className="space-y-3">
                  {(stats?.topCities || []).map(c => (
                    <div key={c.city} className="flex items-center justify-between">
                      <span className="font-medium">{c.city}</span>
                      <div className="text-right">
                        <span className="text-sm font-semibold">{c.orders} cmd</span>
                        <span className="text-xs text-brand-muted ml-2">{fmtMad(c.revenue)}</span>
                      </div>
                    </div>
                  ))}
                  {!stats?.topCities?.length && <p className="text-brand-muted text-sm">Aucune commande encore.</p>}
                </div>

                <h3 className="font-semibold mt-6 mb-3 text-sm text-brand-muted uppercase tracking-wide">Pages populaires</h3>
                <div className="space-y-2">
                  {(stats?.topPages || []).slice(0, 5).map(p => (
                    <div key={p.path} className="flex justify-between text-sm">
                      <span className="text-brand-muted truncate max-w-[70%]">{p.path}</span>
                      <span className="font-medium">{p.views}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock size={18} className="text-brand-amber" /> Commandes récentes
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-brand-muted border-b border-brand-border">
                      <th className="text-left py-2 font-medium">Date</th>
                      <th className="text-left py-2 font-medium">N° commande</th>
                      <th className="text-left py-2 font-medium">Client</th>
                      <th className="text-left py-2 font-medium">Ville</th>
                      <th className="text-right py-2 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(stats?.recentOrders || []).map(o => (
                      <tr key={`${o.orderId}-${o.ts}`} className="border-b border-brand-border/50 hover:bg-brand-cream/50">
                        <td className="py-3 text-brand-muted whitespace-nowrap">{fmtTime(o.ts)}</td>
                        <td className="py-3 font-mono text-xs">{o.orderId}</td>
                        <td className="py-3">
                          <p className="font-medium">{o.name || '—'}</p>
                          {o.phone && <p className="text-xs text-brand-muted">{o.phone}</p>}
                        </td>
                        <td className="py-3">{o.city || '—'}</td>
                        <td className="py-3 text-right font-bold text-brand-amber">{fmtMad(o.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!stats?.recentOrders?.length && (
                  <p className="text-brand-muted text-sm py-8 text-center">
                    Aucune commande pour l&apos;instant — les commandes COD apparaîtront ici automatiquement.
                  </p>
                )}
              </div>
            </section>

            {(stats?.recentLeads?.length ?? 0) > 0 && (
              <section className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
                <h2 className="font-semibold text-lg mb-4">Leads récents (formulaires soumis)</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-brand-muted border-b border-brand-border">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Réf.</th>
                        <th className="text-left py-2">Client</th>
                        <th className="text-left py-2">Ville</th>
                        <th className="text-right py-2">Valeur panier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats!.recentLeads.map(l => (
                        <tr key={`${l.orderId}-${l.ts}`} className="border-b border-brand-border/50">
                          <td className="py-2.5 text-brand-muted">{fmtTime(l.ts)}</td>
                          <td className="py-2.5 font-mono text-xs">{l.orderId}</td>
                          <td className="py-2.5">{l.name || '—'}</td>
                          <td className="py-2.5">{l.city || '—'}</td>
                          <td className="py-2.5 text-right">{fmtMad(l.value)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
