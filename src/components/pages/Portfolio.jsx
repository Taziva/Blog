import React, { Component } from "react";
import AboutMe from "../sections/AboutMe.jsx";
import Skills from "../sections/Skills.jsx";
import Contact from "../sections/Contact.jsx";
import Layout from "../layout/Layout.jsx";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { tagLine: "If you want to get to know me" };
  }
  render() {
    return (
      <Layout pageTitle="Portfolio" tagLine={this.state.tagLine}>
        <AboutMe />
        <Skills />
        <Contact />
      </Layout>
    );
  }
}
