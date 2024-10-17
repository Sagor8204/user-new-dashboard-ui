export default function Button({ text, icon: Icon }) {
  return (
    <buttton className="border border-primary-400 text-primary-400 rounded-md px-4 py-2 flex items-center gap-3 w-fit ml-auto mb-3 text-[15px]">
      {Icon && <Icon className="text-2xl" />}
      {text}
    </buttton>
  );
}
