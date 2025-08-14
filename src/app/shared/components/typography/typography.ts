import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TypographyStyle {
  name: string;
  displayName: string;
  variable: string;
  family: string;
  weight: string;
  size: string;
  lineHeight: string;
  example: string;
}

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.html',
  styleUrl: './typography.scss'
})
export class TypographyComponent {
  headings: TypographyStyle[] = [
    { name: 'H1', displayName: 'Heading 1', variable: '--font-h1', family: 'Inter', weight: '700', size: '24px', lineHeight: '32px', example: 'Heading 1' },
    { name: 'H2', displayName: 'Heading 2', variable: '--font-h2', family: 'Inter', weight: '700', size: '20px', lineHeight: '28px', example: 'Heading 2' },
    { name: 'H3', displayName: 'Heading 3', variable: '--font-h3', family: 'Inter', weight: '600', size: '20px', lineHeight: '28px', example: 'Heading 3' },
    { name: 'H4', displayName: 'Heading 4', variable: '--font-h4', family: 'Inter', weight: '600', size: '16px', lineHeight: '24px', example: 'Heading 4' },
    { name: 'H5', displayName: 'Heading 5', variable: '--font-h5', family: 'Inter', weight: '600', size: '14px', lineHeight: '20px', example: 'Heading 5' },
    { name: 'H6', displayName: 'Heading 6', variable: '--font-h6', family: 'Inter', weight: '500', size: '14px', lineHeight: '20px', example: 'Heading 6' },
    { name: 'H7', displayName: 'Heading 7', variable: '--font-h7', family: 'Inter', weight: '400', size: '12px', lineHeight: '16px', example: 'Heading 7' },
    { name: 'H8', displayName: 'Heading 8', variable: '--font-h8', family: 'Inter', weight: '600', size: '10px', lineHeight: '14px', example: 'Heading 8' }
  ];

  labels: TypographyStyle[] = [
    { name: 'Label 1', displayName: 'Label 1', variable: '--font-label-1', family: 'Inter', weight: '600', size: '15px', lineHeight: '16px', example: 'Label 1' },
    { name: 'Label 2', displayName: 'Label 2', variable: '--font-label-2', family: 'Inter', weight: '500', size: '14px', lineHeight: '16px', example: 'Label 2' },
    { name: 'Label 3', displayName: 'Label 3', variable: '--font-label-3', family: 'Inter', weight: '500', size: '14px', lineHeight: '18px', example: 'Label 3' },
    { name: 'Label 4', displayName: 'Label 4', variable: '--font-label-4', family: 'Inter', weight: '500', size: '13px', lineHeight: '18px', example: 'Label 4' },
    { name: 'Label 5', displayName: 'Label 5', variable: '--font-label-5', family: 'Inter', weight: '600', size: '13px', lineHeight: '20px', example: 'Label 5' },
    { name: 'Label 5E', displayName: 'Label 5E', variable: '--font-label-5e', family: 'Inter', weight: '700', size: '13px', lineHeight: '20px', example: 'Label 5E' },
    { name: 'Label 6', displayName: 'Label 6', variable: '--font-label-6', family: 'Inter', weight: '400', size: '13px', lineHeight: '20px', example: 'Label 6' },
    { name: 'Label 7', displayName: 'Label 7', variable: '--font-label-7', family: 'Inter', weight: '400', size: '13px', lineHeight: '18px', example: 'Label 7' },
    { name: 'Label 8', displayName: 'Label 8', variable: '--font-label-8', family: 'Inter', weight: '600', size: '12px', lineHeight: '16px', example: 'Label 8' }
  ];

  navigation: TypographyStyle[] = [
    { name: 'Nav 1', displayName: 'Navigation 1', variable: '--font-nav-1', family: 'Inter', weight: '700', size: '16px', lineHeight: '24px', example: 'Navigation 1' },
    { name: 'Nav 2', displayName: 'Navigation 2', variable: '--font-nav-2', family: 'Inter', weight: '600', size: '16px', lineHeight: '24px', example: 'Navigation 2' }
  ];

  bodyText: TypographyStyle[] = [
    { name: 'Base', displayName: 'Base Text', variable: '--font-base', family: 'Inter', weight: '400', size: '13px', lineHeight: '19px', example: 'This is base text, the standard body copy used throughout the application.' },
    { name: 'Base Emphasized', displayName: 'Base Text Emphasized', variable: '--font-base-emphasized', family: 'Inter', weight: '500', size: '13px', lineHeight: '19px', example: 'This is emphasized base text, used to highlight important information.' },
    { name: 'Base Strong', displayName: 'Base Text Strong', variable: '--font-base-strong', family: 'Inter', weight: '600', size: '13px', lineHeight: '19px', example: 'This is strong base text, used for critical information or calls to action.' },
    { name: 'Blurb', displayName: 'Blurb Text', variable: '--font-blurb', family: 'Inter', weight: '400', size: '14px', lineHeight: '20px', example: 'This is blurb text, slightly larger than base text for better readability as section descriptor or caption.' }
  ];

  getFontStyle(style: TypographyStyle) {
    return {
      'font-family': "'Inter', sans-serif",
      'font-weight': style.weight,
      'font-size': style.size,
      'line-height': style.lineHeight
    };
  }
}
