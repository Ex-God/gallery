export class Element {
  constructor(parent, html, placeForInsert) {
    this.parent = parent
    this.html = html
    this.placeForInsert = placeForInsert
  }

  render() {
    this.parent.insertAdjacentHTML(this.placeForInsert, this.html)
  }

  static addActiveClass(event ,elementsArray) {
    for(const element of elementsArray) {
      element.addEventListener(event, () => {
        this.clearActiveClasses(elementsArray)
        element.classList.add('active')
      })
    }
  }

  static clearActiveClasses(elementsArray) {
    elementsArray.forEach(element => {
      element.classList.remove('active')
    })
  }
}