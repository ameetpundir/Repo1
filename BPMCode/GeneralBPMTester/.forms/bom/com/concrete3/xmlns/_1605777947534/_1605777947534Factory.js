/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.concrete3.xmlns._1605777947534._1605777947534Factory. 
 */ 

com.tibco.data.Loader.classDefiner["com.concrete3.xmlns._1605777947534._1605777947534Factory"] = function() {

/**
 * Constructor.
 */
var theClass = function(form) {
    this.context = new Object();
    this.context.form = form;
    this.context.dataStore = form.getDataStore();
    this.context.logger = form.getLogger();
    this.context.item = null;
    this.context.id = null;
    this.loader = form._loader;
};

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.concrete3.xmlns._1605777947534._1605777947534Factory");

theClass.prototype.SUPPORTED_CLASSES = ["com.concrete3.xmlns._1605777947534.P3"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.concrete3.xmlns._1605777947534._1605777947534Factory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createP3 = function(jsonData) {
    var classObject = this.loader.newInstance("com.concrete3.xmlns._1605777947534.P3", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateP3 = function(jsonData) {
    var classObject = this.loader.newInstance("com.concrete3.xmlns._1605777947534.P3", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.concrete3.xmlns._1605777947534._1605777947534Factory"]();
