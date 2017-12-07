import test from 'ava';
import <%= shortPackagenameCamel %> from './index';

test('<%= shortPackagenameCamel %> is executed without failing', t => {
  t.notThrows(<%= shortPackagenameCamel %>);
});
