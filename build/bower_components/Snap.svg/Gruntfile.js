module.exports=function(s){var e=s.file.readJSON("package.json");s.initConfig({pkg:e,banner:s.file.read("./src/copy.js").replace(/@VERSION/,e.version).replace(/@DATE/,s.template.today("yyyy-mm-dd"))+"\n",uglify:{options:{banner:"<%= banner %>",report:"min"},dist:{src:"<%= concat.target.dest %>",dest:"dist/snap.svg-min.js"}},concat:{options:{banner:"<%= banner %>"},target:{dest:"dist/snap.svg.js",src:["./node_modules/eve/eve.js","./src/amd-banner.js","./src/mina.js","./src/svg.js","./src/path.js","./src/set.js","./src/equal.js","./src/mouse.js","./src/filter.js","./src/amd-footer.js"]}},exec:{dr:{command:"node node_modules/dr.js/dr dr.json"}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-exec"),s.registerTask("default",["concat","uglify","exec"])};