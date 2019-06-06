class Options {
  constructor(height, width, fontSize, bg, textAlign) {
    this.height = height;
    this.width = width;
    this.fontSize = fontSize;
    this.bg = bg;
    this.textAlign = textAlign;
  }
  newDiv() {
    let div = document.createElement('div'),
        info = document.querySelector('.info-header');

        div.classList.add('info-header-tab-test');
        div.textContent = 'Hello Anna!';
        info.appendChild(div);

        div.style.cssText = `height: ${this.height}; \
        width: ${this.width}; \
        font-size: ${this.fontSize}; \
        background-color: ${this.bg}; \
        text-align: ${this.textAlign}; \
        `;
  }
}
  const newOptions = new Options('60px', '300px', '40px', 'red', 'center');
  
  console.log(newOptions.newDiv());
  

// let div = document.createElement('div'),
//     info = document.querySelector('.info-header');

// div.classList.add('info-header-tab-test');
// div.textContent = 'Hello Anna!';
// info.appendChild(div);

//     div.style.cssText = "height: 100px; \
//     width: 100px; \
//     font-size: 30px; \
//     background-color: yellow; \
//     text-align: center; \
//     ";