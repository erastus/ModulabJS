module.exports = {
  console: console,

  importPackage: function (_) {
    // No hace nada, solo simula la función esperada
  },

  com: {
    systelab: {
      modulabgold: {
        common: {
          data: {
            patient: {}
          }
        },
        client: {
          common: {
            util: {
              javascriptUtil: {}
            }
          }
        }
      }
    }
  },

  patientConGenero: {
    getGender: () => 'M'
  },

  utilidades: {
    showMessage: (msg) => console.log('[UTILIDADES]:', msg)
  }
};
