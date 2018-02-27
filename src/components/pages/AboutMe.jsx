import React, { Component } from "react";
import Card from "../layout/Card.jsx";
import Layout from "../layout/Layout.jsx";

export default class AboutMe extends Component {
  render() {
    return (
      <Layout pageTitle="About" tagLine="If you wanna know me">
        <Card sectionName="mission" title="Mission" text={mission} />
        <Card sectionName="concept" title="Concept" text={concept} />
        <Card sectionName="about-me" title="About Me" text={""}>
          <p className="about-me__media-text">{shoniwa}</p>
          <img
            className="about-me__media-image"
            src="/images/hero-image.jpg"
            alt="Shoniwa Marovatsanga"
          />
        </Card>
      </Layout>
    );
  }
}
const mission =
  "OBM is a platform to showcase great ideas that have found a place in the world";
const concept =
  "The concept for Our Blind Mouse came from the way that life seems to often play out for visionaries, they have an idea and although they don't see it with their eyes they can see it in their minds. In pursuit of this vision they move by instinct, hope, and faith. Instinct is quite a wild animalistic sense, I felt the brand needed an animal to represent this however it had to be something that moved with hope and faith. <p> I then came across Matthew 5 v5:</p>\n\n <blockquote> Blessed are the meek, for they will inherit the earth. </blockquote>\n\n My animal had to be meek and led by instinct, it's survival based entirely around faith, so I chose a blind mouse.";

const shoniwa =
  "My name's Shoniwa Marovatsanga and I currently run Our Blind Mouse as a seed project which I hope in future can be a place where ideas are born, hosted and nurtured.\n\n I am currently working as a Software Engineer at Honeycomb TV, where we do great work in video delivery and I am given a great environment to learn from colleagues with different levels of experience.\n\n Outside of work I spend my time working on new web apps , and helping bring ideas to life. If you have any ideas that you think I could help bring to life don’t hesitate to get in touch.";
