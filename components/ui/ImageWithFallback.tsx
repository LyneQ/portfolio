import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const currentSrc = error ? (fallback || 'https://placeholder.lyneq.be/400x400?label=No%20Image%20found%20:(&font_size=32&background_color=d0d0d0') : src;

  return (
    <>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onClick={() => setIsOpen(true)}
        className={`${props.className || ''} cursor-pointer`}
        {...props}
      />

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <Dialog.Content className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center outline-none">
              <VisuallyHidden.Root>
                <Dialog.Title>Image preview</Dialog.Title>
                <Dialog.Description>Large view of the selected image</Dialog.Description>
              </VisuallyHidden.Root>
              <Dialog.Close className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none">
                <X size={32} />
              </Dialog.Close>
              <img
                src={currentSrc}
                alt={alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
