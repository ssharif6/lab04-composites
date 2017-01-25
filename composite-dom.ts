interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  print() {
    console.log("I'm a leaf");
  }
}

class DomElement implements IDomElement {
  
  private list : IDomElement[] = [];

  print() {
    this.list.forEach((elem : IDomElement) => {
        console.log(elem);
        elem.print();
    });
  }
}
