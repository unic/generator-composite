import test from 'ava';
import <%= shortPackagename %> from './index';

test('<%= shortPackagename %> is executed without failing', t => {
  t.notThrows(<%= shortPackagename %>);
});
