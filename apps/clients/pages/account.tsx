import { useState } from 'react';

export default function Account() {
  const [form, setForm] = useState({ name: '', lastName: '', birthday: '' });
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Account</h1>
      <form className="space-y-2">
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border p-1" />
        <input placeholder="Last Name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="border p-1" />
        <input type="date" value={form.birthday} onChange={e => setForm({ ...form, birthday: e.target.value })} className="border p-1" />
      </form>
      <section className="mt-4">
        <h2 className="font-semibold">Blood Tests</h2>
        <p>Upload and manage your blood tests here.</p>
      </section>
    </div>
  );
}
