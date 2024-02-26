module.exports = {
    // Directorio donde Jest buscará archivos de prueba
    roots: ['<rootDir>/src'],
  
    // Patrón de archivos que Jest considerará como archivos de prueba
    testMatch: ['**/*.test.ts'],
  
    // Transforma los archivos TypeScript antes de ejecutar las pruebas
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  
    // Módulos de TypeScript que deben ser transpilados por Jest
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    // Reportar cobertura de código
    collectCoverage: true,
  
    // Directorio donde se almacenarán los informes de cobertura
    coverageDirectory: 'coverage',
  };
  