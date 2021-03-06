// Compile cranberry with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'scss/<%= pkg.name %>.scss'
        }
      },
      extras: {
        files: {
          'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
          'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
          'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
        }
      },
      grid:{
        files: {
          'dist/css/<%= pkg.name %>-grid.css': 'scss/grid/<%= pkg.name %>-grid.scss',
          'dist/css/<%= pkg.name %>-grid-10.css': 'scss/grid/<%= pkg.name %>-grid-10.scss',
          'dist/css/<%= pkg.name %>-grid-12.css': 'scss/grid/<%= pkg.name %>-grid.scss',
          'dist/css/<%= pkg.name %>-grid-15.css': 'scss/grid/<%= pkg.name %>-grid-15.scss',
          'dist/css/<%= pkg.name %>-grid-16.css': 'scss/grid/<%= pkg.name %>-grid-16.scss'
        }
      },
      docs: {
        files: {
          'docs/assets/css/docs.min.css': 'docs/assets/scss/docs.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};