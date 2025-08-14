import { Component } from '@angular/core';
import { ColorPaletteComponent } from './shared/components/color-palette/color-palette';
import { TypographyComponent } from './shared/components/typography/typography';
import { ButtonShowcaseComponent } from './shared/components/button-showcase/button-showcase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorPaletteComponent, TypographyComponent, ButtonShowcaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Figma Component Library';

  expandedSections: { [key: string]: boolean } = {
    'colors': true,
    'typography': false,
    'buttons': true,
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
