var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var DomElement = (function () {
    function DomElement(elementName, textContent) {
        this.list = [];
        this.list = [];
        this.elementName = elementName;
        this.textContent = textContent;
    }
    DomElement.prototype.add = function (elem) {
        this.list.push(elem);
    };
    DomElement.prototype.print = function () {
        console.log("<" + this.elementName);
        if (this.textContent) {
            console.log(this.textContent);
        }
        this.list.forEach(function (elem) {
            elem.print();
        });
        console.log("</" + this.elementName + ">");
    };
    return DomElement;
}());
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
div.add(p1);
div.add(p2);
html.add(div);
html.print();
