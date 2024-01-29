import React, {
  useCallback, useLayoutEffect, useState 
} from 'react';
import { ImageInputType } from './types';
import { 
  ImageInputErrorText,
  ImageInputFile,
  ImageInputFilePreview,
  ImageInputFileAttachIcon,
  ImageInputFileDeleteButton,
  ImageInputFileName,
  ImageInputFilePreviewSide,
  ImageInputFileText,
  ImageInputFileUploadButton,
  ImageInputFileUploadIcon,
  ImageInputIcon,
  ImageInputIconText,
  ImageInputIconUploadButton,
  ImageInputIconUploadIcon,
  ImageInputImage, 
  ImageInputImageIcon, 
  ImageInputImageInfo, 
  ImageInputImagePreview, 
  ImageInputImageDeleteButton, 
  ImageInputImagePreviewImage, 
  ImageInputImagePreviewShadow, 
  ImageInputImageText, 
  ImageInputImageTitle, 
  ImageInputImageWithoutPreview, 
  ImageInputImageWithoutPreviewIcon, 
  ImageInputLabel, 
  ImageInputNative, 
  ImageInputStyled, 
  ImageInputIconPreview,
  ImageInputIconPreviewIcon,
  ImageInputIconImage,
  ImageInputIconDeleteButton,
  ImageInputIconName
} from './styled';

export type ImageInputChangeEventHandler = (value: File | null) => unknown;

export interface ImageInputProps extends Omit<React.ComponentProps<'input'>, 'value' | 'onChange'> {
  type?: ImageInputType;
  value?: File | URL | null;
  label?: string;
  error?: string;
  onChange?: ImageInputChangeEventHandler;
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  type = 'image',
  value: initialValue,
  accept = 'image/png, image/jpeg, image/webp',
  size = 5242880, 
  label, 
  error, 
  onChange,
  onInputChange,
  ...props
}) => {
  const isLabel = !!label;
  const isError = !!error;

  const setInitialValue = useCallback((value: File | null) => {
    onChange?.(value);
  }, [onChange]);
  const [value, setValue] = typeof initialValue !== 'undefined' ? [initialValue, setInitialValue] : useState<File | null>(null);

  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [previewImageFileName, setPreviewImageFileName] = useState<string | null>(null);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files !== null && event.target.files.length > 0) {
      const value: File = event.target.files[0];
      
      setValue(value);
    } else {
      setValue(null);
    }

    onInputChange?.(event);
  }, [setValue, onInputChange]);

  const handleDelete = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    event.preventDefault();

    setValue(null);
  }, [setValue]);

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      if (value !== null) {
        if (value instanceof File) {
          const file: File = value;
          const reader = new FileReader();
    
          reader.addEventListener('load', () => {
            const previewImageUrl: string | null = reader.result?.toString() ?? null;
          
            setPreviewImageFileName(file.name);
            setPreviewImageUrl(previewImageUrl);
          });
          reader.readAsDataURL(file);
        } else if (value instanceof URL) {
          const url: URL = value;
          const splitedPath: string[] = url.pathname.split('/');
          const fileName: string = splitedPath[splitedPath.length - 1];

          setPreviewImageFileName(fileName);
          setPreviewImageUrl(url.toString());
        }
      } else {
        setPreviewImageFileName(null);
        setPreviewImageUrl(null);
      }
    }, [value]);
  }

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
              <ImageInputImageDeleteButton
                onClick={handleDelete}
              >
                Удалить
              </ImageInputImageDeleteButton>
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
          {previewImageUrl === null && (
            <ImageInputIconUploadButton>
              <ImageInputIconUploadIcon />
              Загрузить
            </ImageInputIconUploadButton>
          )}
          {previewImageUrl === null && (
            <ImageInputIconText>
              Максимальный размер: 5 Мб.
            </ImageInputIconText>
          )}
          {previewImageUrl !== null && (
            <ImageInputIconPreview>
              <ImageInputIconPreviewIcon>
                <ImageInputIconImage
                  src={previewImageUrl}
                />
                <ImageInputIconDeleteButton 
                  onClick={handleDelete}
                />
              </ImageInputIconPreviewIcon>
              {previewImageFileName !== null && (
                <ImageInputIconName>
                  {previewImageFileName}
                </ImageInputIconName>
              )}
            </ImageInputIconPreview>
          )}
        </ImageInputIcon>
      )}
      {type === 'file' && (
        <ImageInputFile>
          {previewImageFileName === null && (
            <ImageInputFileUploadButton>
              <ImageInputFileUploadIcon />
              Загрузить
            </ImageInputFileUploadButton>
          )}
          {previewImageFileName === null && (
            <ImageInputFileText>
              Максимальный размер: 5 Мб.
            </ImageInputFileText>
          )}
          {previewImageFileName !== null && (
            <ImageInputFilePreview>
              <ImageInputFilePreviewSide>
                <ImageInputFileAttachIcon />
                <ImageInputFileName>
                  {previewImageFileName}
                </ImageInputFileName>
              </ImageInputFilePreviewSide>
              <ImageInputFilePreviewSide>
                <ImageInputFileDeleteButton 
                  onClick={handleDelete}
                />
              </ImageInputFilePreviewSide>
            </ImageInputFilePreview>
          )}
        </ImageInputFile>
      )}
      {isError && (
        <ImageInputErrorText
          $type={type}
        >
          {error}
        </ImageInputErrorText>
      )}
    </ImageInputStyled>
  );
};

export * from './types';
