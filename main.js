class Blog extends HTMLElement {
   constructor() {
      super()

      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
   }

   build() {
      const componetRoot = document.createElement("div")
      componetRoot.setAttribute("class", "card")

      const cardLeft = document.createElement("div")
      cardLeft.setAttribute("class", "card_left")

      const autor = document.createElement("span")
      autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous ")

    
      const linker = document.createElement("a")
      const newLink = document.createElement("h1")
      newLink.textContent = this.getAttribute("title")
      linker.href = this.getAttribute("link-url")
      
      linker.appendChild(newLink)
    

      const newContent = document.createElement("p")
      newContent.textContent = this.getAttribute("Content")

      cardLeft.appendChild(autor)
      cardLeft.appendChild(linker)
      cardLeft.appendChild(newContent)


      const cardRight = document.createElement("div")
      cardRight.setAttribute("class", "card_right")

      const newImg = document.createElement("img")
      newImg.src = this.getAttribute("link-img")

      cardRight.appendChild(newImg)


      componetRoot.appendChild(cardLeft)
      componetRoot.appendChild(cardRight)

      return componetRoot
   }

   styles() {
      const style = document.createElement('style')
      style.textContent = `
       .card{
          border: 1px solid black;
          width: 401px;
          display: flex;
          flex-Direction: row;
          font-size: .52rem;
       }
       div{
          margin: 10px 4px;
       }
       img{
         width: 100px;
         height: 100px;
       }
      `
      
      return style
   }
}

customElements.define("blog-new", Blog)