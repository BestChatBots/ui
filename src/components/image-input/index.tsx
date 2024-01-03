import React, { useCallback, useState } from 'react';
import { ImageInputType } from './types';
import { 
  ImageInputErrorText,
  ImageInputIcon,
  ImageInputIconPreview,
  ImageInputIconPreviewAttachIcon,
  ImageInputIconPreviewDeleteButton,
  ImageInputIconPreviewName,
  ImageInputIconPreviewSide,
  ImageInputIconText,
  ImageInputIconUploadButton,
  ImageInputIconUploadIcon,
  ImageInputImage, 
  ImageInputImageIcon, 
  ImageInputImageInfo, 
  ImageInputImagePreview, 
  ImageInputImagePreviewDeleteButton, 
  ImageInputImagePreviewImage, 
  ImageInputImagePreviewShadow, 
  ImageInputImageText, 
  ImageInputImageTitle, 
  ImageInputImageWithoutPreview, 
  ImageInputImageWithoutPreviewIcon, 
  ImageInputLabel, 
  ImageInputNative, 
  ImageInputStyled 
} from './styled';

export interface ImageInputProps extends React.ComponentProps<'input'> {
  type?: ImageInputType;
  label?: string;
  error?: string;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  type = 'image', 
  accept = 'image/png, image/jpeg, image/webp',
  size = 5242880, 
  label, 
  error, 
  onChange, 
  ...props
}) => {
  const isLabel = !!label;
  const isError = !!error;

  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [previewImageFileName, setPreviewImageFileName] = useState<string | null>(null);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files !== null && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const previewImageUrl: string | null = reader.result?.toString() ?? null;
      
        setPreviewImageFileName(file.name);
        setPreviewImageUrl(previewImageUrl);
      });
      reader.readAsDataURL(file);
    }

    onChange?.(event);
  }, [onChange]);

  const handleDelete = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    event.preventDefault();
    
    setPreviewImageFileName(null);
    setPreviewImageUrl(null);
  }, []);

  return (
    <ImageInputStyled
      $type={type}
    >
      {isLabel && (
        <ImageInputLabel
          $type={type}
        >
          {label}
        </ImageInputLabel>
      )}
      <ImageInputNative
        {...props} 
        type="file"
        accept={accept}
        size={size}
        onChange={handleChange}
      />
      {type === 'image' && (
        <ImageInputImage>
          {previewImageUrl === null && (
            <ImageInputImageWithoutPreview>
              <ImageInputImageWithoutPreviewIcon />
            </ImageInputImageWithoutPreview>
          )}
          {previewImageUrl !== null && (
            <ImageInputImagePreview>
              <ImageInputImagePreviewImage 
                src={previewImageUrl}
              />
              <ImageInputImagePreviewShadow />
              <ImageInputImagePreviewDeleteButton
                onClick={handleDelete}
              >
                Удалить
              </ImageInputImagePreviewDeleteButton>
            </ImageInputImagePreview>
          )}
          {previewImageUrl === null && (
            <ImageInputImageInfo>
              <ImageInputImageTitle>
                Загрузить изображение
                <ImageInputImageIcon />
              </ImageInputImageTitle>
              <ImageInputImageText>
                {'Максимальный размер: 5 Мб.\nФормат изображений: PNG, JPG, WEBP'}
              </ImageInputImageText>
            </ImageInputImageInfo>
          )}
        </ImageInputImage>
      )}
      {type === 'icon' && (
        <ImageInputIcon>
          {previewImageFileName === null && (
            <ImageInputIconUploadButton>
              <ImageInputIconUploadIcon />
              Загрузить
            </ImageInputIconUploadButton>
          )}
          {previewImageFileName === null && (
            <ImageInputIconText>
              Максимальный размер: 5 Мб.
            </ImageInputIconText>
          )}
          {previewImageFileName !== null && (
            <ImageInputIconPreview>
              <ImageInputIconPreviewSide>
                <ImageInputIconPreviewAttachIcon />
                <ImageInputIconPreviewName>
                  {previewImageFileName}
                </ImageInputIconPreviewName>
              </ImageInputIconPreviewSide>
              <ImageInputIconPreviewSide>
                <ImageInputIconPreviewDeleteButton 
                  onClick={handleDelete}
                />
              </ImageInputIconPreviewSide>
            </ImageInputIconPreview>
          )}
        </ImageInputIcon>
      )}
      {isError && (
        <ImageInputErrorText>
          {error}
        </ImageInputErrorText>
      )}
    </ImageInputStyled>
  );
};

export * from './types';
