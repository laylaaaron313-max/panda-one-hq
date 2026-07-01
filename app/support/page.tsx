import Shell from '@/components/Shell'

export default function Support() {
  return <Shell><header><p className="font-bold text-panda">Help Desk</p><h1 className="text-4xl font-black">Submit a Support Request</h1></header><form className="card mt-8 grid max-w-2xl gap-4 rounded-[2rem] p-6"><input className="rounded-2xl border px-4 py-4" placeholder="Subject" /><select className="rounded-2xl border px-4 py-4"><option>Training</option><option>Equipment</option><option>Registration</option><option>Opportunity</option><option>General Question</option></select><textarea className="min-h-40 rounded-2xl border px-4 py-4" placeholder="How can we help?" /><button className="rounded-2xl bg-panda px-4 py-4 font-black text-black">Submit Ticket</button></form></Shell>
}
