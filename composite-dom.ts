interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text : string;

  constructor(text : string) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {

  private list : IDomElement[] = [];
  private elementName : string;
  private textContent : string;

  constructor(elementName : string, textContent? : string) {
    this.list = [];
    this.elementName = elementName;
    this.textContent = textContent;
  }

  add(elem : IDomElement) {
    this.list.push(elem);
  }

  print() {
    console.log("<" + this.elementName);
    if(this.textContent) {
      console.log(this.textContent);
    }
    this.list.forEach((elem : IDomElement) => {
        elem.print();
    });
    console.log("</" + this.elementName + ">");
  }
}

