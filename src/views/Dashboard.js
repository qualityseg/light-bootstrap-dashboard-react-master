import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <center><iframe title="OS" width="900" height="550" src="https://app.powerbi.com/view?r=eyJrIjoiYmMyYjdjYTItNDcyMi00ZTY4LTlkOWQtZDBhOGZmY2JlOWM0IiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9" frameborder="0" allowFullScreen="true"></iframe></center>

      <center><iframe title="OS" width="900" height="550" src="https://analytics.zoho.com/open-view/2737732000000003453" frameborder="0" allowFullScreen="true"></iframe></center>

    </>
  );
}

export default Dashboard;