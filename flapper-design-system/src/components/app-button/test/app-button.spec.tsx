import { newSpecPage } from '@stencil/core/testing';
import { AppButton } from '../app-button';

describe('app-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppButton],
      html: `<app-button label="button"/>`,
    });
    expect(page.root).toEqualHtml(`
    <app-button label="button">
       <mock:shadow-root>
         <button class="btn">
           button
         </button>
       </mock:shadow-root>
     </app-button>
    `);
  });
});
