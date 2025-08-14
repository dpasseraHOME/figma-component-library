import { Component } from '@angular/core';
import { ColorPaletteComponent } from './shared/components/color-palette/color-palette';
import { TypographyComponent } from './shared/components/typography/typography';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorPaletteComponent, TypographyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Figma Component Library';
  
  // Track which sections are expanded
  expandedSections: { [key: string]: boolean } = {
    'colors': true,  // Start with colors expanded
    'typography': false,
    'buttons': false,
    'cards': false,
    'forms': false,
    'layout': false,
    'navigation': false
  };

  toggleSection(sectionId: string): void {
    this.expandedSections[sectionId] = !this.expandedSections[sectionId];
  }

  isExpanded(sectionId: string): boolean {
    return this.expandedSections[sectionId];
  }
}
