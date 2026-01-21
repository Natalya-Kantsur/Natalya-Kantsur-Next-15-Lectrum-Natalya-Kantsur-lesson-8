import Image from "next/image";

const platforms = [
  { id: "amazon", name: "Amazon Web Services" },
  { id: "azure", name: "Microsoft Azure" },
  { id: "google", name: "Google Cloud Platform" },
  { id: "netlify", name: "Netlify" },
  { id: "vercel", name: "Vercel" },
  { id: "firebase", name: "Firebase" },
];
export default function page() {
  return (
    <div className="space-y-2 flex flex-col gap-2">
      {platforms.map((platform) => (
        <div key={platform.id}>
            <Image
              src={`/${platform.id}.svg`}
              alt={platform.name}
              width={200}
              height={50}
              className="inline-block mr-2 non-dark:bg-black rounded p-2"
            />
            <span className="align-middle text-lg">{platform.name}</span>
        </div>
      ))}
    </div>
  );
}
