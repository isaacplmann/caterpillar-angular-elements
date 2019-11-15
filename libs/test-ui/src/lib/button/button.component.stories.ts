import { text, number, boolean } from '@storybook/addon-knobs';
import { TestUiModule } from '../test-ui.module';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
    text: text('text', ''),
    padding: number('padding', 0),
    style: text('style', 'default'),
  }
})
