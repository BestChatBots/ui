import { styled, css } from 'styled-components';
import { Button, ButtonText } from '@/components/button';
import { Typography } from '@/components/typography';
import { Image } from '@/components/image';
import {
  AttachIcon, NoimgIcon, TrashIcon, UploadIcon 
} from '@/icons';
import { ImageInputType } from './types';
import { adaptive } from '@/adaptive';

export interface ImageInputStyledProps {
  $type: ImageInputType;
}

export const ImageInputStyled = styled.label<ImageInputStyledProps>`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;
  ${({ theme }) => css`
    &:hover {
      ${ImageInputIconUploadButton} {
        background: ${theme.colors.accent.primary};
        ${ImageInputIconUploadIcon} path {
          fill: ${theme.colors.base.white};
        }
      }
    }
  `}
  ${({ $type }) => $type === 'image' && adaptive({
    mobile: css`
      align-items: center;
      width: 100%;
    `
  })}
`;

export const ImageInputNative = styled.input`
  display: none;
`;

export interface ImageInputLabelProps {
  $type: ImageInputType;
}

export const ImageInputLabel = styled(Typography).attrs({ variant: 'body-m-regular' })<ImageInputLabelProps>`
  ${({ $type }) => {
    switch ($type) {
      case 'image':
        return css`
          margin-bottom: 18px;
          text-align: center;
        `;
      case 'icon':
        return css`
          margin-bottom: 10px;
        `;
    }
  }}
`;

export const ImageInputImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageInputImageWithoutPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 412px;
  height: 255px;
  background: ${({ theme }) => theme.colors.grayScale[700]};
  border: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
  border-radius: 12px;
  overflow: hidden;
  ${adaptive({
    mobile: css`
      width: 343px;
      height: 196px;
    `
  })}
`;

export const ImageInputImageWithoutPreviewIcon = styled(NoimgIcon).attrs({ size: 64 })``;

export const ImageInputImagePreview = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grayScale[700]};
  border-radius: 12px;
  overflow: hidden;
`;

export const ImageInputImagePreviewImage = styled(Image).attrs({ width: 412, height: 255 })`
  object-fit: cover;
  ${adaptive({
    mobile: css`
      width: 343px;
      height: 196px;
    `
  })}
`;

export const ImageInputImagePreviewShadow = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  pointer-events: none;
`;

export const ImageInputImagePreviewDeleteButton = styled(Button).attrs({ endIcon: <TrashIcon /> })`
  position: absolute;
  right: 13px;
  bottom: 13px;
  ${ButtonText} {
    color: ${({ theme }) => theme.colors.base.white} !important;
  }
`;

export const ImageInputImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`;

export const ImageInputImageTitle = styled(Typography).attrs({ component: 'h4', variant: 'body-m-regular' })`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
`;

export const ImageInputImageIcon = styled(UploadIcon).attrs({ size: 20 })``;

export const ImageInputImageText = styled(Typography).attrs({ component: 'p', variant: 'body-s-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
  white-space: pre-wrap;
  text-align: center;
  margin-top: 6px;
`;

export const ImageInputIcon = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageInputIconUploadButton = styled(Typography).attrs({ variant: 'button-sm' })`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.accent.primary};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.0);
  width: auto;
  transition: 0.25s;
`;

export const ImageInputIconUploadIcon = styled(UploadIcon).attrs({ size: 18 })``;

export const ImageInputIconPreview = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 287px; 
`;

export const ImageInputIconPreviewSide = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const ImageInputIconPreviewAttachIcon = styled(AttachIcon).attrs({ size: 18 })`
  path {
    fill: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const ImageInputIconPreviewName = styled(Typography).attrs({ variant: 'body-s-regular' })`
  color: ${({ theme }) => theme.colors.accent.primary};
`;

export const ImageInputIconPreviewDeleteButton = styled(Button).attrs(({ theme }) => ({ variant: 'text', color: theme.colors.accent.primary, children: <TrashIcon /> }))``;

export const ImageInputIconText = styled(Typography).attrs({ component: 'p', variant: 'body-s-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
  margin-top: 10px;
`;

export const ImageInputErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;
