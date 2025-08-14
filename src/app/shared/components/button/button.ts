import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger' | 'success' | 'warning';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled';

export interface ButtonConfig {
  variant: ButtonVariant;
  size: ButtonSize;
  state: ButtonState;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() state: ButtonState = 'default';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();

  get buttonClasses(): string {
    const classes = [
      'btn',
      `btn--${this.variant}`,
      `btn--${this.size}`,
      `btn--${this.state}`
    ];

    if (this.fullWidth) {
      classes.push('btn--full-width');
    }

    if (this.disabled) {
      classes.push('btn--disabled');
    }

    if (this.icon) {
      classes.push(`btn--icon-${this.iconPosition}`);
    }

    return classes.join(' ');
  }

  get buttonStyles() {
    return {
      'width': this.fullWidth ? '100%' : 'auto'
    };
  }

  get isDisabled(): boolean {
    return this.disabled || false;
  }

  get iconPos(): 'left' | 'right' {
    return this.iconPosition || 'left';
  }

  get isFullWidth(): boolean {
    return this.fullWidth || false;
  }

  onClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
