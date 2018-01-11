'use strict';

module.exports = {
    env: {
       es6: true, 
	   node: true
    }, 
	globals: {
        'q': false,
        'qx': false,
        'qxWeb': false
    }, 
	parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true, 
			jsx: true
        }, 
		ecmaVersion: 2016, 
		sourceType: 'module'
    }, 
	plugins: [
        'qx-rules'
    ], 
	rules: {
		// Special qooxdoo stuff
		'qx-rules/no-illegal-private-usage': 'error',
		'qx-rules/no-refs-in-members': 'error', 
		
        'accessor-pairs': 'error', 
        'array-bracket-newline': 'off',
		'array-bracket-spacing': ['error', 'never'], 
		'array-callback-return': 'error', 
        'array-element-newline': 'off',
        'arrow-body-style': 'error',
		'arrow-parens': ['error', 'as-needed'], 
		'arrow-spacing': ['error', {
	            after: true, before: true
        	}], 
		'block-scoped-var': 'off', 
        'block-spacing': 'error',
		'brace-style': ['error', '1tbs', {
	            allowSingleLine: false
        	}], 
		// disabled because of https://github.com/eslint/eslint/issues/3420
        'callback-return': 'off',
		
		'camelcase': ['error', {
	            properties: 'always'
        	}], 
        'capitalized-comments': 'off',
        'class-methods-use-this': 'error',
	
		'comma-dangle': ['error', 'never'], 
		'comma-spacing': ['error', {
	            after: true, before: false
        	}], 
		'comma-style': ['error', 'last'], 
		'complexity': 'warn', 
		'computed-property-spacing': ['error', 'never'], 
		'constructor-super': 'error', 
        'consistent-return': 'error',
        'consistent-this': 'off',
		'curly': 'error', 
		'default-case': 'off', 
		'dot-location': ['error', 'property'], 
		'dot-notation': 0, 
		'eol-last': 'error', 
		'eqeqeq': 0, 
        'for-direction': 'error',
		'func-call-spacing': ['error', 'never'], 
        'func-names': 'off',
        'func-style': 'off',
		'generator-star-spacing': ['error', 'both'], 
		'guard-for-in': 'error', 
		'handle-callback-err': 'warn', 
        'id-blacklist': 'error',                  // missing blacklist
        'id-length': 'off',
        'id-match': 'off',
		'indent': ['error', 2, {
            		SwitchCase: 1
		 }], 
        'init-declarations': 'off',
		'jsx-quotes': 'error', 
		'key-spacing': 0, 
		'keyword-spacing': 'error', 
        'line-comment-position': 'off',
		'linebreak-style': ['error', 'unix'], 
        'lines-around-comment': 'off',
        'lines-around-directive': 'off',
		'max-depth': 'warn', 
        'max-len': 'off',
		'max-lines': ['warn', {
	            max: 1024
        	}], 
		'max-nested-callbacks': ['warn', 6], 
		'max-params': ['warn', {
            max: 6
        }], 
        'max-statements': 'off',
		'max-statements-per-line': 'error', 
        'multiline-ternary': 'off',
		'new-cap': ['error', {
            capIsNew: true, newIsCap: true
        }], 
		'new-parens': 'error', 
        'newline-per-chained-call': 'error',
		'no-alert': 'error', 
		'no-array-constructor': 'error', 
		'no-caller': 'error', 
		'no-case-declarations': 'error', 
		'no-class-assign': 'error', 
		'no-cond-assign': 'error', 
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-continue': 'off',
		'no-const-assign': 'error', 
		'no-constant-condition': 'error', 
		'no-control-regex': 'error', 
		'no-debugger': 'error', 
		'no-delete-var': 'error', 
		'no-div-regex': 'error', 
		'no-dupe-args': 'error', 
		'no-dupe-class-members': 'error', 
		'no-dupe-keys': 'error', 
		'no-duplicate-case': 'error', 
		'no-duplicate-imports': ['error', {
            includeExports: true
        }], 
		'no-else-return': 'error', 
		'no-empty': ['error', {
            allowEmptyCatch: true
        }], 
        "no-empty-function": "off",
	
		'no-empty-character-class': 'error', 
		'no-empty-pattern': 'error', 
		'no-eq-null': 'error', 
		'no-eval': 'error', 
		'no-ex-assign': 'error', 
		'no-extend-native': 'error', 
		'no-extra-bind': 'error', 
		'no-extra-boolean-cast': 'error', 
		'no-extra-label': 'error', 
		// disabled because of https://github.com/eslint/eslint/issues/6028
		// 'no-extra-parens': [2, 'all', {nestedBinaryExpressions: false}],
		'no-extra-semi': 'error', 
		'no-fallthrough': 'error', 
		'no-floating-decimal': 'error', 
		'no-func-assign': 'error', 
		'no-global-assign': 'error', 
		'no-implicit-coercion': 'error', 
		'no-implicit-globals': 'error', 
		'no-implied-eval': 'error', 
        'no-inline-comments': 'off',
        'no-invalid-this': 'error',
	
		'no-inner-declarations': 'error', 
		'no-invalid-regexp': 'error', 
		'no-irregular-whitespace': 'error', 
		'no-iterator': 'error', 
		'no-label-var': 'error', 
		'no-labels': 'error', 
		'no-lone-blocks': 'error', 
		'no-lonely-if': 'error', 
		'no-loop-func': 0, 
        'no-magic-numbers': 'off',
		'no-mixed-operators': 'error', 
		'no-mixed-requires': ['error', {
	            allowCall: true, grouping: true
        	}], 
		'no-mixed-spaces-and-tabs': 'error', 
		'no-multi-spaces': 'error', 
		'no-multi-str': 'error', 
		'no-multiple-empty-lines': ['off', {
            max: 1
        }], 
		'no-negated-condition': 'error', 
		'no-nested-ternary': 'warn', 
		'no-new': 'error', 
		'no-new-func': 'error', 
		'no-new-object': 'error', 
		'no-new-require': 'error', 
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error', 
		'no-obj-calls': 'error', 
		'no-octal': 'error',
		'no-octal-escape': 'error', 
		'no-path-concat': 'error', 
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error', 
		'no-regex-spaces': 'error', 
		'no-restricted-globals': ['error', 'event'],
		'no-restricted-imports': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
		'no-restricted-modules': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
		'no-restricted-syntax': ['error', 'WithStatement'], 
		'no-return-assign': 0, 
		'no-script-url': 'error', 
		'no-self-assign': ['error', {props: true}], 
		'no-self-compare': 'error', 
		'no-sequences': 'error',
		'no-shadow': 'error', 
		'no-shadow-restricted-names': 'error', 
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error', 
		'no-trailing-spaces': 'error', 
		'no-undef': ['error', {
            typeof: true
        }], 
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'error', 
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error', 
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 0, 
		'no-unused-labels': 'error', 
		'no-unused-vars': 'error', 
		'no-use-before-define': ['error', 'nofunc'],
		'no-useless-call': 'error', 
		'no-useless-computed-key': 'error', 
		'no-useless-concat': 'error', 
		'no-useless-constructor': 'error',
		'no-useless-escape': 'off', 
		'no-useless-rename': 'error', 
		'no-void': 'error', 
		'no-warning-comments': 'warn', 
		'no-whitespace-before-property': 'error', 
		'no-with': 'error', 
		'object-curly-spacing': ['error', 'never'], 
		'one-var': ['error', 'never'], 
		'one-var-declaration-per-line': 'error', 
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'after'], 
		'object-property-newline': 'error',
		'padded-blocks': ['error', 'never'], 
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'double', {
            allowTemplateLiterals: true
        }], 
		'radix': 'error', 
		'require-yield': 'error', 
		'rest-spread-spacing': ['error', 'never'], 
		'semi': ['error', 'always'],
		'semi-spacing': ['error', {
            after: true, 
			before: false
        }], 
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never'
        }],
		'space-in-parens': ['error', 'never'], 
		'space-infix-ops': 0, 
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always', {
	            block: {
	                balanced: true, 
					markers: ['!']
	            }, line: {
	                exceptions: ['-']
	            }
	        }],
        'strict': 'off',
        'switch-colon-spacing': 'error',
	
		'symbol-description': 'error', 
		'template-curly-spacing': 'error', 
        'template-tag-spacing': "error",
		
		'unicode-bom': ['error', 'never'], 
		'use-isnan': 'error', 
        "valid-jsdoc": "off",
		'valid-typeof': ['error', {requireStringLiterals: true}], 
        "vars-on-top": "off",
		
		'wrap-iife': ['error', 'inside'], 
        'wrap-regex': 'off',
		
		'yield-star-spacing': ['error', 'both'], 
		'yoda': 'error'
    }
};
