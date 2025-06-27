module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nuevas características
        'fix', // Correcciones de bugs
        'docs', // Documentación
        'style', // Cambios de formato (espacios, comas, etc.)
        'refactor', // Refactorización de código
        'perf', // Mejoras de rendimiento
        'test', // Agregar o corregir tests
        'build', // Cambios en el sistema de build
        'ci', // Cambios en CI/CD
        'chore', // Tareas de mantenimiento
        'revert', // Revertir commits anteriores
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 120],
    'body-max-line-length': [0, 'always', 0],
    'footer-max-line-length': [0, 'always', 0],
  },
};
