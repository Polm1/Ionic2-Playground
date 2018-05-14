export class SettingsService {
  public altBackground: boolean = false;

  setBackground(isAlt: boolean) {
    console.log('-- SettingsService.setBackground ', isAlt);
    this.altBackground = isAlt;
  }

  isAltBackground() {
    console.log('-- SettingsService.isAltBackground ', this.altBackground);
    return this.altBackground;
  }

}
