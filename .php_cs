<?php
use PhpCsFixer\Fixer\Import\OrderedImportsFixer;

$finder = PhpCsFixer\Finder::create()
    ->name('*.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true)
    ->exclude([
        '.git',
        '.idea',
        '*.blade.php',
        'bower_components',
        'node_modules',
        'vendor',
    ])
    ->exclude([
        'bootstrap/cache',
        'storage',
    ])
;

return PhpCsFixer\Config::create()
    ->setUsingCache(true)
    ->setRules([
        '@Symfony'               => true,
        'concat_space'           => ['spacing' => 'one'],
        'array_syntax'           => ['syntax' => 'short'],
        'binary_operator_spaces' => ['align_double_arrow' => true],
        'no_empty_phpdoc'        => false,
        'phpdoc_no_empty_return' => false,
        'phpdoc_summary'         => false,
        'ordered_imports'        => [
            'sortAlgorithm' => OrderedImportsFixer::SORT_ALPHA,
            'importsOrder'  => [
                OrderedImportsFixer::IMPORT_TYPE_CONST,
                OrderedImportsFixer::IMPORT_TYPE_FUNCTION,
                OrderedImportsFixer::IMPORT_TYPE_CLASS,
            ],
        ],
        'is_null'                => ['use_yoda_style' => false],
        'pow_to_exponentiation'  => true,
        'yoda_style' => false,
    ])
    ->setRiskyAllowed(true)
    ->setFinder($finder)
;