import { useAdmin } from '@/contexts/AdminContext';

export function useCustomImage(imageId: string, fallbackUrl: string) {
  const { getImageUrl } = useAdmin();
  
  try {
    return getImageUrl(imageId) || fallbackUrl;
  } catch {
    // Fallback if not within AdminProvider
    return fallbackUrl;
  }
}