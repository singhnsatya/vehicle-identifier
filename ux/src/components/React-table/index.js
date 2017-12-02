import React from "react";
import { render } from "react-dom";

export default class Table extends React.Component {
    constructor(props) {
      super(props)
      this.makeTable = this.makeTable.bind(this)
    }
    makeTable() {
      let { data } = this.props;
      let tableHead = ['Id', 'Frame', 'Powertrain', 'Vehicle Name', 'Wheels']
      let table = document.getElementById("myTable");
      table.innerHTML = '';
      table.border = "1";
      let row = table.insertRow(-1);
      tableHead.forEach((item, index) => {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = item;
        row.appendChild(headerCell);
      })
      if(data && data.length > 0 && (typeof(Object.keys(data[0])) !== 'undefined') && Object.keys(data[0]).length > 0) {
        var keys = Object.keys(data[0]).filter(i => i != "_id");
      
      for (var i = 0; i < data.length; i++) {
        let row1 = table.insertRow();
        for (var value of keys) {
          var cell1 = row1.insertCell();
          if (value == "wheels") {
            cell1.innerHTML = data[i][value] && data[i][value]['plastic'] && data[i][value]['plastic']+" ("+data[i][value]['positions'].join()+")" || 
            data[i][value] && data[i][value]['metal'] && data[i][value]['metal']+" ("+data[i][value]['positions'].join()+")" || "none"
          } else {
            cell1.innerHTML = data[i][value]
          }
        }
      }
    }
    }
    render() {
      console.log(this.props)
      return ( < div > {
          this.props.table ? this.makeTable() : null
        } < /div>)
      }
    }