import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorSwatch {
  name: string;
  value: string;
  variable: string;
}

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.scss'
})
export class ColorPaletteComponent {
  primaryColors: ColorSwatch[] = [
    { name: 'Grey 0', value: '#27323F', variable: '--primary-grey-0' },
    { name: 'Grey 1', value: '#3E4A58', variable: '--primary-grey-1' },
    { name: 'Grey 2', value: '#576370', variable: '--primary-grey-2' },
    { name: 'Grey 3', value: '#586471', variable: '--primary-grey-3' },
    { name: 'Grey 4', value: '#5C6876', variable: '--primary-grey-4' },
    { name: 'Grey 5', value: '#5D6F83', variable: '--primary-grey-5' },
    { name: 'Grey 6', value: '#687E95', variable: '--primary-grey-6' },
    { name: 'Grey 7', value: '#7A8FA5', variable: '--primary-grey-7' },
    { name: 'Grey 8', value: '#B7C1CD', variable: '--primary-grey-8' },
    { name: 'Grey 9', value: '#FAFCFE', variable: '--primary-grey-9' },
    { name: 'Grey 9A', value: '#F9FAFC', variable: '--primary-grey-9a' },
    { name: 'White', value: '#FFFFFF', variable: '--primary-white' },
    { name: 'Dark Grey', value: '#30333D', variable: '--primary-dark-grey' }
  ];

  secondaryColors: ColorSwatch[] = [
    { name: 'Blue 0', value: '#1E6DB0', variable: '--secondary-blue-0' },
    { name: 'Blue 1', value: '#267AC5', variable: '--secondary-blue-1' },
    { name: 'Blue 2', value: '#3A9BFC', variable: '--secondary-blue-2' },
    { name: 'Blue 2 (65%)', value: '#3A9BFC', variable: '--secondary-blue-2-65' },
    { name: 'Blue 3', value: '#C4E1FE', variable: '--secondary-blue-3' },
    { name: 'Blue 4', value: '#EBF5FF', variable: '--secondary-blue-4' }
  ];

  accentColors: ColorSwatch[] = [
    { name: 'Orange 0', value: '#F29049', variable: '--accent-orange-0' },
    { name: 'Red 1', value: '#CC4343', variable: '--accent-red-1' },
    { name: 'Red 2', value: '#DA3838', variable: '--accent-red-2' },
    { name: 'Red 3', value: '#EB3C3C', variable: '--accent-red-3' },
    { name: 'Yellow 0', value: '#F2C349', variable: '--accent-yellow-0' },
    { name: 'Yellow 1', value: '#F9F1DF', variable: '--accent-yellow-1' },
    { name: 'Green 0', value: '#3D996D', variable: '--accent-green-0' },
    { name: 'Green 1', value: '#47B27F', variable: '--accent-green-1' },
    { name: 'Green 2', value: '#51CC91', variable: '--accent-green-2' },
    { name: 'Green 3', value: '#5BE5A3', variable: '--accent-green-3' },
    { name: 'Green 4', value: '#96FACA', variable: '--accent-green-4' }
  ];

  chartColors: ColorSwatch[] = [
    { name: 'Chart 1', value: '#84D2E4', variable: '--chart-1' },
    { name: 'Chart 2', value: '#FF8080', variable: '--chart-2' },
    { name: 'Chart 3', value: '#74D6A7', variable: '--chart-3' },
    { name: 'Chart 4', value: '#F7D3A7', variable: '--chart-4' },
    { name: 'Chart 5', value: '#A9B0EB', variable: '--chart-5' },
    { name: 'Chart 6', value: '#C0C9D4', variable: '--chart-6' }
  ];

  spotColors: ColorSwatch[] = [
    { name: 'Grey 0B', value: '#2F353C', variable: '--spot-grey-0b' },
    { name: 'Grey 0C', value: '#383B45', variable: '--spot-grey-0c' },
    { name: 'Grey 0D', value: '#373E46', variable: '--spot-grey-0d' },
    { name: 'Grey 1B', value: '#3E4752', variable: '--spot-grey-1b' },
    { name: 'Grey 1C', value: '#3D4854', variable: '--spot-grey-1c' },
    { name: 'Grey 7B', value: '#9297A9', variable: '--spot-grey-7b' },
    { name: 'BlueGrey 0', value: '#A1B8CE', variable: '--spot-bluegrey-0' },
    { name: 'BlueGrey 1', value: '#ADC0D3', variable: '--spot-bluegrey-1' },
    { name: 'BlueGrey 2', value: '#C4D4E2', variable: '--spot-bluegrey-2' },
    { name: 'BlueGrey 3', value: '#BDD4EE', variable: '--spot-bluegrey-3' }
  ];
}
