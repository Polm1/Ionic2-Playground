export class SettingsService {
  public altBackground: boolean = false;

  setBackground(value: boolean) {
    console.log('-- SettingsService.setBackground ', value);
    this.altBackground = value;
  }

  getBackground() {
    console.log('-- SettingsService.getBackground ', this.altBackground);
    return this.altBackground;
  }

}
