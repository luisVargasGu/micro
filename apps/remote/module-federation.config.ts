import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
        './Module': 'apps/remote/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
