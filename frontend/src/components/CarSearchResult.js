import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const fuelOptions = ['Petrol', 'Diesel'];
const transmissionOptions = ['Automatic', 'Manual'];
const typeOptions = ['SUV', 'Hatchback', 'Sedan'];

export default function CarSearchResult() {
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [type, setType] = useState('');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCars = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await axios.get('http://localhost:5000/api/cars/allcars', {
        params: {
          fuel,
          transmission,
          type,
          maxPrice,
        },
      });

      setCars(res.data || []);
    } catch (err) {
      console.error(err);
      setError('Unable to load cars right now. Please try again.');
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const activeFilters = useMemo(() => {
    const items = [];
    if (fuel) items.push(fuel);
    if (transmission) items.push(transmission);
    if (type) items.push(type);
    items.push(`Up to ₹${maxPrice}`);
    return items;
  }, [fuel, transmission, type, maxPrice]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 text-slate-900 md:px-6 lg:px-8">
      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8">
        <div className="flex flex-col gap-6 border-b border-slate-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8390E]">Car search</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-[2rem]">Search results</h2>
            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Filter by fuel, transmission, body type, and your max price budget.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8390E]/15 bg-[#FFF4EF] px-4 py-3 text-sm text-[#8A310E] shadow-sm">
            <strong>{cars.length}</strong> cars available • Transparent pricing • 0 deposit
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-[#F6F7FB] p-5 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Fuel</label>
                <div className="flex flex-wrap gap-2">
                  {fuelOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFuel((prev) => (prev === option ? '' : option))}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        fuel === option
                          ? 'border-[#E8390E] bg-[#E8390E] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-[#E8390E]/40 hover:text-[#E8390E]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Transmission</label>
                <div className="flex flex-wrap gap-2">
                  {transmissionOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTransmission((prev) => (prev === option ? '' : option))}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        transmission === option
                          ? 'border-[#E8390E] bg-[#E8390E] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-[#E8390E]/40 hover:text-[#E8390E]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Body type</label>
                <div className="flex flex-wrap gap-2">
                  {typeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setType((prev) => (prev === option ? '' : option))}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        type === option
                          ? 'border-[#E8390E] bg-[#E8390E] text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-[#E8390E]/40 hover:text-[#E8390E]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <span>Max price</span>
                  <span className="rounded-full bg-[#F6F7FB] px-3 py-1 text-[#E8390E]">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer rounded-full accent-[#E8390E]"
                />
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>₹500</span>
                  <span>₹10,000</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={fetchCars}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
              >
                {loading ? 'Searching…' : 'Apply filters'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setFuel('');
                  setTransmission('');
                  setType('');
                  setMaxPrice(3000);
                }}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:border-[#E8390E]/30 hover:text-[#E8390E]"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#08111F] p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F9C8B7]">Live summary</p>
                <h3 className="mt-2 text-xl font-black text-white">Perfect match for your trip</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#FBCBBF]">Fast pickup</span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-200">
              {activeFilters.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  <span>{item}</span>
                  <span className="text-[#FBCBBF]">Active</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/8 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Why book here?</p>
              <ul className="mt-3 space-y-2 text-slate-200/90">
                <li>• Transparent pricing with no hidden charges.</li>
                <li>• Instant pickup and flexible support.</li>
                <li>• Verified vehicles with 0 deposit on select cars.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[26px] border border-slate-200 bg-[#F6F7FB] p-5 shadow-sm md:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-black text-slate-900">Available vehicles</h3>
              <p className="text-sm text-slate-500">Choose a car that matches your ride style and budget.</p>
            </div>
            <span className="rounded-full border border-[#E8390E]/15 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8390E]">{cars.length} result(s)</span>
          </div>

          {error ? (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>
          ) : null}

          {loading ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-4 py-8 text-sm text-slate-500">Loading available cars…</div>
          ) : cars.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
              No cars match your current filters. Try a wider price range or clear some selections.
            </div>
          ) : (
            <div className="grid gap-6 xl:grid-cols-2">
              {cars.map((car) => {
                const imageUrl = car.images && car.images.length
                  ? `http://localhost:5000/${String(car.images[0]).replace(/\\/g, '/')}`
                  : 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80';

                return (
                  <article key={car._id} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                    <div className="relative h-52 overflow-hidden bg-slate-100 md:h-56">
                      <img src={imageUrl} alt={car.name} className="h-full w-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
                        {car.type || 'Car'}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-1 flex items-center gap-1 text-amber-400">
                            <span>★</span>
                            <span className="text-sm font-semibold text-slate-700">4.7</span>
                            <span className="text-xs text-slate-400">(120 reviews)</span>
                          </div>
                          <h4 className="text-xl font-black text-slate-900">{car.name}</h4>
                          <p className="mt-1 text-sm text-slate-500">{car.type || 'Luxury'} · {car.seats || 5} seats</p>
                        </div>

                        <div className="text-right">
                          <p className="text-[22px] font-black text-[#E8390E]">₹{car.priceperday}</p>
                          <span className="text-xs text-slate-400">/ day</span>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{car.transmission || 'Automatic'}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{car.fuel || 'Petrol'}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{car.type || 'SUV'}</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                        <span>📍 800m away · Near city center</span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">0 Deposit</span>
                      </div>

                      <button className="mt-5 inline-flex items-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-black">
                        View details & book →
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
