import { html } from 'lit';
import '../src/my-card1.js';

export default {
  title: 'MyCard1',
  component: 'my-card1',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <my-card1
      style="--my-card1-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </my-card1>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
