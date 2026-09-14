const steps = [
  ["01","Discover","Understand your requirements and goals."],
  ["02","Plan","Define the solution, scope and technology."],
  ["03","Design","Create the UI, UX and digital experience."],
  ["04","Develop","Build and integrate the solution."],
  ["05","Test","Ensure functionality, performance and quality."],
  ["06","Launch","Deploy the final product."],
  ["07","Support","Provide ongoing improvements and support."]
];

export default function Process() {
  return <section className="py-24"><div className="mx-auto max-w-7xl px-6">
    <div className="max-w-2xl"><p className="font-semibold text-blue-600">OUR PROCESS</p><h2 className="mt-3 text-4xl font-bold tracking-tight">From Idea to Digital Reality.</h2></div>
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number,title,description]) => <div key={number} className="rounded-2xl border border-slate-200 p-6"><span className="text-sm font-bold text-blue-600">{number}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-slate-600">{description}</p></div>)}</div>
  </div></section>;
}