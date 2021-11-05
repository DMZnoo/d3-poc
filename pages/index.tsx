import * as React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ForceGraph from "../components/ForceGraph";
import miserables from "../public/miserables.json";

const Home: NextPage = () => {
  const graphRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (graphRef.current) {
      const graph = ForceGraph(miserables, {
        nodeId: (d) => d.id,
        nodeGroup: (d) => d.group,
        nodeTitle: (d) => `${d.id}\n${d.group}`,
        linkStrokeWidth: (l) => Math.sqrt(l.value),
        width: 1200,
        height: 800,
      });
      graphRef.current.appendChild(graph);
    }
  }, []);
  return (
    <div className={styles.container}>
      <div ref={graphRef} />
    </div>
  );
};

export default Home;
