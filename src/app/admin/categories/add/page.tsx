"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from '../../../../utils/api';

export default function AddCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [sortOrder, setSortOrder] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await apiFetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
          isActive,
          sortOrder: Number(sortOrder),
        }),
      });
      if (!res.ok) {
        throw new Error("Lỗi khi tạo danh mục");
      }
      router.push("/admin/categories");
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Thêm danh mục mới</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên danh mục</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mô tả</label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium mb-1">Ảnh (URL)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
        </div> */}
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">Thứ tự</label>
            <input
              type="number"
              className="w-24 border border-gray-300 rounded-md px-3 py-2"
              value={sortOrder}
              onChange={e => setSortOrder(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              id="isActive"
              checked={isActive}
              onChange={e => setIsActive(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="isActive" className="text-sm">Hiển thị</label>
          </div>
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Đang lưu..." : "Thêm danh mục"}
          </button>
        </div>
      </form>
    </div>
  );
}