// namespace/module (not changed)
import * as Old from './namespaceold';

// namespace/module (converted)
import * as NamespaceNew from "./namespacenew";

// ES6 Module
import B from "./b"

var New = NamespaceNew.Coveo.JsAdmin.New;

var a = new New();
var b = new B();
var c = new Old();
