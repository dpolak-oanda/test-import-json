import packageJson from './package.json' assert { type: 'json' };

export function version() {
    return packageJson.version
}

