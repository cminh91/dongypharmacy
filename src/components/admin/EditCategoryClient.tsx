"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Category = {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  description: string;
  productCount: number;
  isActive: boolean;
  sortOrder: number;
};

export default function EditCategoryClient({ category }: { category: Category }) {
  const router = useRouter();
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const [imageUrl, setImageUrl] = useState(category.imageUrl);
  const [isActive, setIsActive] = useState(category.isActive);
  const [sortOrder, setSortOrder] = useState(category.sortOrder);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Import động apiFetch để tránh lỗi khi build server
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { apiFetch } = await import("../../utils/api");
      const res = await apiFetch(`/api/categories/${category.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          imageUrl,
          isActive,
          sortOrder: Number(sortOrder),
        }),
      });
      if (!res.ok) throw new Error("Lỗi khi cập nhật danh mục");
      router.push("/admin/categories");
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Bạn có chắc chắn muốn xóa danh mục này?")) return;
    setLoading(true);
    setError(null);
    try {
      const { apiFetch } = await import("../../utils/api");
      const res = await apiFetch(`/api/categories/${category.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Lỗi khi xóa danh mục");
      router.push("/admin/categories");
    } catch (err: any) {
      setError(err.message || "Lỗi không xác định");
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          onClick={handleDelete}
          disabled={loading}
        >
          Xóa danh mục
        </button>
      </div>
    </form>
  );
}