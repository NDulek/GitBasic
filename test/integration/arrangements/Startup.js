sap.ui.define(["sap/ui/test/Opa5"],function(t){"use strict";return t.extend("sap.git.basic.GitBasicProject.test.integration.arrangements.Startup",{iStartMyApp:function(t){var a=t||{};a.delay=a.delay||50;this.iStartMyUIComponent({componentConfig:{name:"sap.git.basic.GitBasicProject",async:true},hash:a.hash,autoWait:a.autoWait})}})});