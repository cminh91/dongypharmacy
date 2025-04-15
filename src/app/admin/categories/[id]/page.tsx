// SSR: Lấy dữ liệu danh mục, truyền cho client component
import { notFound } from "next/navigation";
import EditCategoryClient from "@/components/admin/EditCategoryClient";
import { apiFetch } from '../../../../utils/api';

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

async function getCategory(id: string): Promise<Category | null> {
  try {
    const res = await apiFetch(`/api/categories/${id}`, { method: "GET" });
    if (!res.ok) return null;
    const data = await res.json();
    return data as Category;
  } catch {
    return null;
  }
}

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = await getCategory(id);

  if (!category) return notFound();

  return (
    <div className="container mx-auto px-4 py-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa danh mục</h1>
      <EditCategoryClient category={category} />
    </div>
  );
}