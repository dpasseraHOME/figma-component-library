import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button';

export interface ButtonExample {
  label: string;
  variant: 'primary' | 'secondary' | 'text' | 'danger' | 'success' | 'warning';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-showcase.html',
  styleUrl: './button-showcase.scss'
})
export class ButtonShowcaseComponent {
  buttonExamples: ButtonExample[] = [
    // Primary buttons
    { label: 'Primary Button', variant: 'primary', size: 'medium' },
    { label: 'Primary Small', variant: 'primary', size: 'small' },
    { label: 'Primary Large', variant: 'primary', size: 'large' },
    { label: 'Primary Disabled', variant: 'primary', size: 'medium', disabled: true },
    
    // Secondary buttons
    { label: 'Secondary Button', variant: 'secondary', size: 'medium' },
    { label: 'Secondary Small', variant: 'secondary', size: 'small' },
    { label: 'Secondary Large', variant: 'secondary', size: 'large' },
    { label: 'Secondary Disabled', variant: 'secondary', size: 'medium', disabled: true },
    
    // Text buttons
    { label: 'Text Button', variant: 'text', size: 'medium' },
    { label: 'Text Small', variant: 'text', size: 'small' },
    { label: 'Text Large', variant: 'text', size: 'large' },
    { label: 'Text Disabled', variant: 'text', size: 'medium', disabled: true },
    
    // Danger buttons
    { label: 'Delete', variant: 'danger', size: 'medium' },
    { label: 'Delete Small', variant: 'danger', size: 'small' },
    { label: 'Delete Large', variant: 'danger', size: 'large' },
    { label: 'Delete Disabled', variant: 'danger', size: 'medium', disabled: true },
    
    // Success buttons
    { label: 'Save', variant: 'success', size: 'medium' },
    { label: 'Save Small', variant: 'success', size: 'small' },
    { label: 'Save Large', variant: 'success', size: 'large' },
    { label: 'Save Disabled', variant: 'success', size: 'medium', disabled: true },
    
    // Warning buttons
    { label: 'Warning', variant: 'warning', size: 'medium' },
    { label: 'Warning Small', variant: 'warning', size: 'small' },
    { label: 'Warning Large', variant: 'warning', size: 'large' },
    { label: 'Warning Disabled', variant: 'warning', size: 'medium', disabled: true },
    
    // Icon buttons
    { label: 'Add Item', variant: 'primary', size: 'medium', icon: 'fas fa-plus', iconPosition: 'left' },
    { label: 'Download', variant: 'secondary', size: 'medium', icon: 'fas fa-download', iconPosition: 'right' },
    { label: 'Settings', variant: 'text', size: 'medium', icon: 'fas fa-cog', iconPosition: 'left' },
    { label: 'Delete', variant: 'danger', size: 'medium', icon: 'fas fa-trash', iconPosition: 'left' },
    
    // Full width buttons
    { label: 'Full Width Primary', variant: 'primary', size: 'medium', fullWidth: true },
    { label: 'Full Width Secondary', variant: 'secondary', size: 'medium', fullWidth: true }
  ];

  onButtonClick(button: ButtonExample): void {
    console.log('Button clicked:', button);
  }
}
