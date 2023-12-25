import { ThemeNavigationColors } from '../../../../@types/theme';
import Colors from '../../Colors';

// Add default color for dark theme.
export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.blackTheme.primary,
  background: Colors.blackTheme.background,
  card: Colors.blackTheme.card,
};

export default {
  Colors,
  NavigationColors,
};
