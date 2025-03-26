export default function Info({ title, info }: { title: string, info: string }) {
    return <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-medium text-sm">{info}</p>
    </div>;
}