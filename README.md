```
❯ npm run test

> test-import-json@1.0.0 test
> jest

FAIL  ./app.test.ts
● Test suite failed to run

problematic.ts:1:42 - error TS2821: Import assertions are only supported when the '--module' option is set to 'esnext' or 'nodenext'.

1 import packageJson from './package.json' assert { type: 'json' };
~~~~~~~~~~~~~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.815 s
Ran all test suites.
```

```
❯ npm run start

> test-import-json@1.0.0 start
> node --experimental-specifier-resolution=node --loader ts-node/esm app.ts

(node:1418987) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1418987) ExperimentalWarning: The Node.js specifier resolution flag is experimental. It could change or be removed at any time.
1.0.0
(node:1418987) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time

```
