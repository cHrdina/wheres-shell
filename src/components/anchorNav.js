import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

class AnchorNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onDateSelect(e.target.text);
  }

  getAnchorData() {
    console.log("Getting anchor data");
    return this.props.data.map((trip) =>
      ({
        id: trip.sys.id,
        date: trip.fields.tripDate.split("-")[0]
      })
    )
  }

  removeDuplicates(array, propName) {
    console.log("Removing duplicates for array: ");
    console.log(array);
    var arrayOut = [];
    var i = 0;

    while (i < array.length-1) {
      arrayOut.push(array[i]);
      if (i+1 < array.length-1) {
        while (array[i][propName] === array[i+1][propName]) {
          i++;
        }
      }
      i++;
    }
    console.log("New array: ");
    console.log(arrayOut);
    return arrayOut;
  }


  render() {

    const anchorData = this.getAnchorData();
    const selectedYear = this.props.selectedYear;


    return (

      <div id="side-nav-left">

        <ul class="no-style">
          {this.props.data && this.removeDuplicates(anchorData, "date").map((listItem) =>
            <li>
              <Link
                key={listItem.id}
                to={`#${listItem.id}`}
                onClick={this.handleClick}
                className={selectedYear === listItem.date ? "active" : "inactive"}
                smooth
              >
                {listItem.date}
              </Link>
            </li>
          )}
        </ul>
      </div>

    );
  }

}

export default AnchorNav;
