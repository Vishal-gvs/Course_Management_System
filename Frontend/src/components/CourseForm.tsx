import { useState } from "react";

interface Props {
  initialData?: { title: string; description: string };
  onSubmit: (data: { title: string; description: string }) => void;
}

export default function CourseForm({ initialData, onSubmit }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");

  return (
    <form
      className="space-y-4 bg-white p-6 rounded-xl shadow transition-all"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, description });
      }}
    >
      <div>
        <label className="block text-sm font-semibold text-gray-700">Title</label>
        <input
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
