/**
 * DO NOT EDIT: This is an automatically generated file.
 * This provides an implementation of the factory class com.concrete2.xmlns._1605716782112._1605716782112Factory. 
 */ 

com.tibco.data.Loader.classDefiner["com.concrete2.xmlns._1605716782112._1605716782112Factory"] = function() {

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

com.tibco.data.Loader.currentLoader.registerClass(theClass, "com.concrete2.xmlns._1605716782112._1605716782112Factory");

theClass.prototype.SUPPORTED_CLASSES = ["com.concrete2.xmlns._1605716782112.P2"];

theClass.prototype.checkClassName = function(className) {
    for(i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
        if (className == this.SUPPORTED_CLASSES[i]) return;
    }
    throw("Factory com.concrete2.xmlns._1605716782112._1605716782112Factory does not support class \"" + className + "\"");
};

theClass.prototype.create = function(className, jsonData) {
    this.checkClassName(className);
    var classObject = this.loader.newInstance(className, this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData, this.context);
    return classObject;
};

theClass.prototype.createP2 = function(jsonData) {
    var classObject = this.loader.newInstance("com.concrete2.xmlns._1605716782112.P2", this.context);
    if(jsonData != undefined)
        classObject = classObject._setValue(classObject, jsonData);
    return classObject;
};

theClass.prototype.listCreateP2 = function(jsonData) {
    var classObject = this.loader.newInstance("com.concrete2.xmlns._1605716782112.P2", this.context);
    var classList;
    classList = classObject._setValueList(classObject, jsonData);
    return classList;
};
    
theClass.prototype.getClass = function(className) {
    this.checkClassName(className);
    return this.loader.getClass(className);
};
};

com.tibco.data.Loader.classDefiner["com.concrete2.xmlns._1605716782112._1605716782112Factory"]();
