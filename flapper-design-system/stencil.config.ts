import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';

setPluginConfigurationDefaults({
  tailwindConf,
  tailwindCssPath: './src/global/global.css',
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
});

export const config: Config = {
  namespace: 'flapper-design-system',
  plugins: [sass(), tailwind({ useAutoPrefixer: true }), tailwindHMR()],
  globalStyle: 'src/global/global.css',
  outputTargets: [
    react({
      componentCorePackage: 'flapper-design-system',
      proxiesFile: '../flapper-react-ui/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
