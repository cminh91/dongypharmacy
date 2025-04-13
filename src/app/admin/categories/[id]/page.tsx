import EditCategoryClient from '@/components/admin/EditCategoryClient';

const EditCategoryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <EditCategoryClient id={id} />;
};

export default EditCategoryPage;