import { css, styled } from 'styled-components';
import { Typography } from '@/components/typography';
import { ArrowDownIcon } from '@/icons';
import { Chip } from '@/components/chip';
import { SelectVariant } from './types';
import { Checkbox } from '@/components/checkbox';
import { Scrollbar, ScrollbarShadow, ScrollbarStyled } from '@/components/scrollbar';

export interface SelectStyledProps {
  $fullWidth: boolean;
}

export const SelectStyled = styled.div<SelectStyledProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export const SelectLabel = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-bottom: 10px;
`;

export interface SelectInputProps {
  $open: boolean;
  $multiple: boolean;
  $variant: SelectVariant;
  $value: boolean;
  $error: boolean;
  $fullWidth: boolean;
}

export const SelectInput = styled.div<SelectInputProps>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border: 1px solid ${({ theme, $error }) => {
    if ($error) {
      return theme.colors.error;
    }

    return theme.colors.grayScale[600];
  }};
  border-radius: 8px;
  min-width: 160px;
  ${({ $multiple, $variant, $value }) => {
    if ($multiple) {
      switch ($variant) {
        case 'default': {
          if ($value) {
            return css`
              padding: 6px;
            `;
          } 
          return css`
            padding: 11px 10px;
          `;
        }
        case 'checkbox':
          return css`
            padding: 11px 10px;
          `;
      }
    }

    return css`
      padding: 11px 10px;
    `;
  }}
  ${({ $open, $error }) => {
    if ($error) {
      return css``;
    }
    if ($open) {
      return css`
        border-color: ${({ theme }) => theme.colors.accent.primary};
      `;
    }

    return css`
      &:hover {
        border-color: ${({ theme }) => theme.colors.accent.primary};
      }
    `;
  }}
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export const SelectPlaceholder = styled(Typography).attrs({ variant: 'body-s-regular' })`
  color: ${({ theme }) => theme.colors.grayScale[400]};
  user-select: none;
  line-height: 20px;
`;

export const SelectValue = styled(Typography).attrs({ variant: 'body-s-regular' })`
  user-select: none;
  line-height: 20px;
`;

export const SelectValues = styled.div`
  display: flex;
`;

export const SelectValueList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SelectValueListItem = styled(Chip)`
  cursor: pointer;
`;

export const SelectIndicator = styled(Typography).attrs({ variant: 'body-s-regular' })`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.accent.primary};
  border-radius: 50%;
  padding-top: 1px;
`;

export const SelectArrow = styled(ArrowDownIcon).attrs({ size: 18 })``;

export const SelectContent = styled.div`
  display: flex;
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.select};
  top: 0px;
  left: 0px;
  width: 200px;
  min-width: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.grayScale[800]};
  border: 1px solid ${({ theme }) => theme.colors.grayScale[600]};
  border-radius: 8px;
  outline: none;
  padding: 6px;
  padding-right: 3px;
  margin-top: 10px;
  > ${ScrollbarStyled} {
    display: flex;
    width: 100%;
  }
`;

export const SelectContentScrollbarWrapper = styled(Scrollbar).attrs({ variant: 'secondary', size: 4, scrollShadows: { size: 30, top: <ScrollbarShadow side="top" />, bottom: <ScrollbarShadow side="bottom" /> } })`
  display: flex;
  width: 100%;
`;

export const SelectContentContent = styled.div`
  display: flex;
  width: 100%;
  padding-right: 3px;
  max-height: 242px;
`;

export const SelectOptions = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const SelectOptionList = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export interface SelectOptionProps {
  $active: boolean;
  $multiple: boolean;
}

export const SelectOption = styled.div<SelectOptionProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.25s all;
  border-radius: 6px;
  ${({ theme, $active, $multiple }) => {
    if ($active && !$multiple) {
      return css`
        background: ${theme.colors.accent.primary};
      `;
    }

    return css`
      &:hover {
        background: ${theme.colors.grayScale[700]};
      }
    `;
  }}
`;

export const SelectOptionText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  user-select: none;
`;

export const SelectCheckboxes = styled.div`
  display: flex;
  width: 100%;
`;

export const SelectCheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const SelectCheckbox = styled(Checkbox)`
  padding: 6px 10px;
  transition: 0.25s all;
  border-radius: 6px;
  &:hover {
    background: ${({ theme }) => theme.colors.grayScale[700]};
  }
`;

export const SelectErrorText = styled(Typography).attrs({ variant: 'body-m-regular' })`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.error};
`;
