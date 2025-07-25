const test = require('ava');
const { ESLint } = require('eslint');

async function runEslint(str, conf) {
	const linter = new ESLint({
		overrideConfigFile: true,
		overrideConfig: conf
	});

	const results = await linter.lintText(str, { filePath: 'test.js' });
	return results[0].messages;
}

test('main', async t => {
	const conf = require('../');

	t.true(Array.isArray(conf));
	t.true(typeof conf[0].rules === 'object');

	const errors = await runEslint('\"use strict\";\nconsole.log(\'unicorn\')\n', conf);
	t.is(errors[0].ruleId, 'quotes');
});

test('browser', async t => {
	const conf = require('../browser');

	t.true(Array.isArray(conf));

	const errors = await runEslint('\"use strict\";\nprocess.exit();\n', conf);
	t.is(errors[0].ruleId, 'no-undef');
});
