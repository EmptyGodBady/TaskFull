"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
export default function CardModal() {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  if (!id) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <VisuallyHidden>
        <DialogTitle>Hidden Dialog Title</DialogTitle>
      </VisuallyHidden>
      <DialogContent>i am modal</DialogContent>
    </Dialog>
  );
}
