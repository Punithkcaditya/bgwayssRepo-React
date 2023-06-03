import React from "react";
import ReactDOM from "react-dom";
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import SvgIcon from '@mui/material/SvgIcon';
import CircularProgress from '@mui/material/CircularProgress';
import { _getMyTree } from "../../config/api/CommonApi";

const { useState } = React;

export default function MyTreeItem(props) {
  const [childNodes, setChildNodes] = useState(null);
  const [expanded, setExpanded] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  function MinusSquare(props) {
    if (loader) {
      return <CircularProgress style={{ width: 14, height: 14 }} />;
    } else {
      return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
          {/* tslint:disable-next-line: max-line-length */}
          <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </SvgIcon>
      );
    }
  }

  function PlusSquare(props) {
    if (loader) {
      return <CircularProgress style={{ width: 14, height: 14 }} />;
    } else {
      return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
          {/* tslint:disable-next-line: max-line-length */}
          <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </SvgIcon>
      );
    }
  }

  function fetchChildNodes(id) {
    setLoader(true);
    return new Promise((resolve, reject) => {
      _getMyTree({ id })
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  const handleChange = (event, nodes) => {
    const expandingNodes = nodes.filter((x) => !expanded.includes(x));
    setExpanded(nodes);
    if (expandingNodes[0]) {
      const childId = expandingNodes[0];
      fetchChildNodes(childId).then((result) => {
        setLoader(false);
        setChildNodes(
          result.children.map((node) => (
            <MyTreeItem key={node.id} {...node} id={node.id} name={node.text} />
          ))
        );
      });
    }
  };

  return (
    <TreeView
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      expanded={expanded}
      onNodeToggle={handleChange}
    >
      {/* The node below should act as the root node for now */}
      <TreeItem nodeId={props.id} label={props.name} style={{ padding: "5px" }}>
        {childNodes || [<div key="stub" />]}
      </TreeItem>
    </TreeView>
  );
}

ReactDOM.render(<MyTreeItem />, document.getElementById("root"));
