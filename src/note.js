class Note {
  constructor(content){
    this.content = content
  }

  render(){
    const li = document.createElement('li')
    li.innerText = this.content
    return li
  }
}