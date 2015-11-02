import React from 'react';

export default React.createClass({
  homeTemplate(item, id) {
    return 
      <li key={id} onClick{() => this.props.onItemClick(id)}>{item}</li>;
  },

  render() {
    return (
      <div className="thumbnail" onClick={this.clickHandler}>
        <a href="#">
          <img src={this.props.src}/>
        </a>
      </div>
    );
  }

});

      // <div class="wholeImg">
      //   <a>
      //     <img src="{item.ImgSrc}"/>
      //   </a> 
      // </div>



      // <div className="wholeHomeItem">
      //   <div class="homeImgCont">
      //     <img class="homeImg" src={this.props.ImgSrc}/>
      //   </div>
      //   <div class="homeDetailsCont">
      //     <span class="user">{this.props.User}</span>
      //     <span class="description">{this.props.Description}</span>
      //   </div>
      // </div>





// export default React.createClass({
//   homeTemplate(item, id) {
//     return 
//       <li key={id} onClick{() => this.props.onItemClick(id)}>{item}</li>;
//   },

//   render() {
//     return (
//       <ul>{this.props.collectionData.map(this.homeTemplate)}</ul>
//     );
//   }

// });