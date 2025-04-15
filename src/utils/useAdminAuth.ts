"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Hàm lấy cookie theo tên
function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
}

// Hook kiểm tra đăng nhập admin
export default function useAdminAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("admin_access_token");
    if (!token) {
      router.replace("/admin/login");
    }
  }, [router]);
}