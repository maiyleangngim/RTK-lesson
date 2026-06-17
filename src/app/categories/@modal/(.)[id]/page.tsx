import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { useGetProductByIdQuery } from "@/services/fakeStoreApi";

export default function ProductModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(Number(params.id));

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{data?.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-2">
              <p><b>ID:</b> {data?.id}</p>
              <p><b>Slug:</b> {data?.slug}</p>
              <p><b>Price:</b> ${data?.price}</p>
              <p><b>Category:</b> {data?.category.name}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}